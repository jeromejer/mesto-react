import React from "react";
import PopupWithForm from "./PopupWithForm";

function popupUpdateAvatar({isOpen, onClose}) {

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} title="Обновить аватар" name="update_avatar">
            <input type="url" className="form__text" name="url_avatar" placeholder="Ссылка на аватар" required
            />
            <span className="form__error" id="url_avatar-error"></span>
        </PopupWithForm>
    )
}

export default popupUpdateAvatar;