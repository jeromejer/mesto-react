import React from "react";
import api from "../utils/Api";
import Card from './Card'

function Main(props) {
    const {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props;
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then(({name, about, avatar}) => {
            setUserName(name);
            setUserDescription(about);
            setUserAvatar(avatar)
        })
    }, [])

    React.useEffect(() => {
        api.getCardsData()
        .then((data) => {
            setCards(data)
        })
    }, [])



    return(
       <main>
        <section className="profile">
                <picture className="profile__avatar" onClick={onEditAvatar}>
                <div alt="Аватар" className="profile__avatar-img" style={{ backgroundImage: `url(${userAvatar})` }}></div>
                </picture>
                <div className="profile__info">
                    <div className="profile__description">
                        <div className="profile__line">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit" aria-label="Кнопка редактирования профиля" onClick={onEditProfile}>
                            </button>
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__add-button" onClick={onAddPlace}>
                    </button>
                </div>
        </section>
        <section className="elements">
        {cards.map((card) => {
            return (
                <Card name={card.name} link={card.link} likes={card.likes} key={card._id} onCardClick={onCardClick} card={card}/>
            )
        })}
        </section>
            
        </main> 
    )
}

export default Main;