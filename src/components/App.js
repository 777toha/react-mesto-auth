import React, { useState, useEffect } from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import PopupWithEditAvatar from "./PopupWithEditAvatar";
import PopupWithEditProfile from './PopupWithEditProfile';
import PopupWithAddPlace from './PopupWithAddPlace';
import { api } from '../utils/api'

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [userContext, setUserContext] = useState({ userName: '', userDescription: '', userAvatar: '' });
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null)

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

    useEffect(() => {
        api.getInfo().then(res => setUserContext(
            userContext => ({
                userContext,
                userName: res.name,
                userDescription: res.about,
                userAvatar: res.avatar
            })))
            .catch(err => console.log(`Ошибка.....: ${err}`));
        api.getCards().then((data) => { setCards(data) })
            .catch(err => console.log(`Ошибка.....: ${err}`))
    }, [])

    return (
        <div className="page">

            <Header />

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                userContext={userContext}
                onCardClick={handleCardClick}
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
    );
}

export default App;