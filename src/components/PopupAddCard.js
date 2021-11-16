import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen, onClose, buttonText }) {

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} buttonText={buttonText} title="Новое место" name="add_card">
            <input type="text" className="form__text" name="card_title" placeholder="Название" required />
            <span className="form__error" id="card_title-error"></span>
            <input type="url" className="form__text" name="card_link" placeholder="Ссылка на картинку" required />
            <span className="form__error" id="card_link-error"></span>
        </PopupWithForm>
    )
}

export default PopupAddCard;