import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithEditProfile(props) {
    return(
        <PopupWithForm
        name='popup_profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={props.isOpen}
        onClose={props.onClose}
        >
            <input 
            className="popup__input popup__input_data_name" 
            placeholder="Имя" 
            name="name" 
            type="text"
            id="profile-name" 
            minLength="2" 
            maxLength="40"
            pattern="^[a-zA-Zа-яА-я-\s]+$" 
            required
            />
            <span 
            className="popup__input-error profile-name-error"
            />
            <input 
            className="popup__input popup__input_data_profession" 
            name="job" 
            placeholder="Профессия"
            type="text"  
            id="profile-profession" 
            minLength="2" 
            maxLength="200"
            pattern="^[a-zA-Zа-яА-я-\s]+$" 
            required
            />
            <span 
            className="popup__input-error profile-profession-error"
            />
        </PopupWithForm>
    )
}

export default PopupWithEditProfile