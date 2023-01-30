import React, { useState, useEffect } from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import PopupWithEditAvatar from "./PopupWithEditAvatar";
import PopupWithEditProfile from './PopupWithEditProfile';
import PopupWithAddPlace from './PopupWithAddPlace';
import api from '../utils/api';
import CurrentUserContext from '../context/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard(null)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    }

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCards()
        ]).then(([userData, cardData]) => {
            setCurrentUser(userData);
            setCards(cardData);
        }).catch(err => console.log(`Ошибка.....: ${err}`));
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">

                <Header />

                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    cards={cards}
                />

                <Footer />

                <PopupWithEditProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                />

                <PopupWithAddPlace
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                />

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />

                <PopupWithForm
                    name='confirm-delete'
                    title='Вы уверены?'
                    buttonText='Да'
                />

                <PopupWithEditAvatar
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                />

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;