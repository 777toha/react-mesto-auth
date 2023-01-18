import React from 'react'
import PopupWithForm from "./PopupWithForm"

function PopupWithEditAvatar(props) {


    return (
        <PopupWithForm
            name='popup_avatar'
            title='Обновить аватар'
            buttonText='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
                name='avatar'
                type="url"
                className="popup__input popup__input_avatar-url"
                id="avatar-url"
                placeholder="Ссылка на картинку"
                required
            />
            <span
                className="popup__input-error avatar-url-error"
            />
        </PopupWithForm>
    )
}

export default PopupWithEditAvatar