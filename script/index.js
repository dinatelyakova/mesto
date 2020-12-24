let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let saveButton = popup.querySelector('.popup__safety');
let nameInput = document.querySelector('.popup__text_type_name');
let descriptionInput = document.querySelector('.popup__text_type_descripion');

function openPopup(){
    popup.classList.remove('popup_disabled');
    nameInput.getAttribute('value');
    descriptionInput.getAttribute('value');
}
editButton.addEventListener('click', openPopup);

function closePopup(){
    popup.classList.add('popup_disabled')
}
closeButton.addEventListener('click', closePopup);


function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameProfile = document.querySelector('.profile__name');
    let descriptionProfile = document.querySelector('.profile__description');
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;   
}
formElement.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', closePopup);
