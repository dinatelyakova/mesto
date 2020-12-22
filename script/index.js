let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let saveButton = popup.querySelector('.popup__safety');

function togglePopup() {
    popup.classList.toggle('popup_disabled');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__text_type_name');
    let descriptionInput = document.querySelector('.popup__text_type_descripion');
    let inputs = document.querySelectorAll('input');
    nameInput=`${inputs[0].value}`;
    descriptionInput = `${inputs[1].value}`;
    let nameProfile = document.querySelector('.profile__name');
    let descriptionProfile = document.querySelector('.profile__description');
    nameProfile.textContent = `${nameInput}`;
    descriptionProfile.textContent = `${descriptionInput}`;   
}
formElement.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', togglePopup);
