let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let saveButton = popup.querySelector('.popup__safety');
let nameInput = document.querySelector('.popup__text_type_name');
let descriptionInput = document.querySelector('.popup__text_type_descripion');
let descriptionProfile = document.querySelector('.profile__description');
let nameProfile = document.querySelector('.profile__name');

function openPopup(){
    popup.classList.remove('popup_disabled');
    nameInput.textContent = nameProfile.value;
    descriptionInput.textContent = descriptionProfile.value;
}

function closePopup(){
    popup.classList.add('popup_disabled');
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;   
}

formElement.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', closePopup);
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);