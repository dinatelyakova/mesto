
import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {editButton, formInfoElement, nameInput, descriptionInput,addButton,
    formImageElement,initialCards, validationObj
} from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formValidatorInfo = new FormValidator(validationObj, formInfoElement);
formValidatorInfo.enableValidation();

const formValidatorPlace = new FormValidator(validationObj, formImageElement);
formValidatorPlace.enableValidation();


const popupWithImage = new PopupWithImage('.popup_name_image');
popupWithImage.setEventListeners(); 


function createCard(data) {
    const card = new Card(data,
        {handleCardClick:()=>{
            popupWithImage.open(data.name, data.link);
        }
    }, '.element-template');
    return card;
  } 

const cardList = new Section({
    items: initialCards,
    renderer: (item)=> {
    const card = createCard(item);
    const cardElement = card.render();

    cardList.addItem(cardElement);
}}, '.elements');
cardList.renderItems();


const popupWithPlaceForm = new PopupWithForm('.popup_name_place', formImageElement,{
    handleFormSubmit: (data) =>{
        const card = createCard({name:data.title, link:data.link})
    const cardElement = card.render();
    cardList.addItem(cardElement);
    }
});
popupWithPlaceForm.setEventListeners();
addButton.addEventListener('click', ()=>{
    formImageElement.reset();
    formValidatorPlace.resetValidation();
    formValidatorPlace.inactiveButton();
    popupWithPlaceForm.open();
    });

const userInfo = new UserInfo ({
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description'
});

const popupWithInfo = new PopupWithForm('.popup_name_info', formInfoElement, {
        handleFormSubmit:(item)=>{
            userInfo.setUserInfo(item);  
        }
    });
    popupWithInfo.setEventListeners();
editButton.addEventListener('click', ()=>{
    const getInfo = userInfo.getUserInfo();
    nameInput.value=getInfo.name;
    descriptionInput.value = getInfo.description;
    popupWithInfo.open();
    formValidatorInfo.resetValidation();
    
});


















