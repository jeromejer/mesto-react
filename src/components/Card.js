import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <>
            <article className="element">
                <img className="element__img" alt={props.name} src={props.link} onClick={handleClick} />
                <button type="button" className="element__dlt">
                </button>
                <div className="element__group">
                    <h2 className="element__title">{props.name}</h2>
                    <div className="element__group-like">
                        <button type="button" className="element__like">
                        </button>
                        <p className="element__number-likes">{props.likes.length}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;