import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupUpdateAvatar from './PopupUpdateAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePopup'


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false});


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({isOpen: false});
  }

  function handleCardClick({link, title, isOpen}) {
    setSelectedCard({link, title, isOpen: !isOpen});
  }



  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <PopupUpdateAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>
  );
}

export default App;
