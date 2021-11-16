import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen, onClose, buttonText }) {

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} buttonText={buttonText} title="Редактировать профиль" name="edit_profile">
            <input type="text" className="form__text" name="text_name" placeholder="Введите имя" required />
            <span className="form__error" id="text_name-error"></span>
            <input type="text" className="form__text" name="text_job" placeholder="Введите профессию" required />
            <span className="form__error" id="text_job-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditProfile;