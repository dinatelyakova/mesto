
import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {deleteInPopupButton, editButton, formInfoElement, nameInput, descriptionInput,addButton,
    formImageElement,initialCards, validationObj, avatar, avatarFormElement, avatarInput,formDeletePopup
} from '../utils/constants.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Avatar from '../components/Avatar.js';
import Api from '../components/Api.js';


const formValidatorInfo = new FormValidator(validationObj, formInfoElement);
formValidatorInfo.enableValidation();

const formValidatorPlace = new FormValidator(validationObj, formImageElement);
formValidatorPlace.enableValidation();

const formValidatorAvatar = new FormValidator(validationObj, avatarFormElement);
formValidatorAvatar.enableValidation();


const popupWithImage = new PopupWithImage('.popup_name_image');
popupWithImage.setEventListeners(); 

const options= {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
    headers:{
        authorization: 'a6f4ae8d-c44f-4f5c-8be5-79c549282be2',
        'Content-Type': 'application/json'
    },
}

const api = new Api(options);


const cardList = new Section({
    renderer: (item)=> {
    createCard(item)  
}}, '.elements');


function createCard(data) {
    const card = new Card(data,{
        ownerId: userInfo.getUserId(),
        handleCardClick:()=>{
            popupWithImage.open(data.name, data.link);
        },
        handleDeleteClick:()=>{
            deletePopup.open();
            deletePopup.handleSubmitDelete(()=>{
                api.deleteCard(data._id)
                .then(()=>{
                    card.handleDeleteCard();
                    deletePopup.close();
                })
                .catch((err) => {
                    console.log(`Произошла ошибка ${err}`);
                  });
                })
            
        },
        handleLike:(evt)=>{ 
            if(card.isMyLike(card.getLikesCard(), userInfo.getUserId())){
                api.deleteLike(data._id)
                .then((dataServer) =>{
                    card.setCalcLike(dataServer.likes);
                    card.setLikesCard(dataServer);
                    })
                .catch((err) => {
                    console.log(`Произошла ошибка ${err}`);
                  });
            } else{
                api.putLike(data._id)
                .then((dataServer)=>{
                    card.setCalcLike(dataServer.likes);
                    card.setLikesCard(dataServer);
                    })
                .catch((err) => {
                    console.log(`Произошла ошибка ${err}`);
                  });
            }
        }}, '.element-template');
    
    const cardElement = card.render();
    cardList.addItem(cardElement)
  } 
  
  const deletePopup = new PopupWithForm('.popup_name_delete', formDeletePopup, {
    handleFormSubmit: () => true
});
deletePopup.setEventListeners();

api.getInitialCards()
.then(cardsListServer=>{
    cardList.renderItems(cardsListServer);
    })
.catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });


const popupWithPlaceForm = new PopupWithForm('.popup_name_place', formImageElement,{
        handleFormSubmit: (dataInput) =>{
            formValidatorPlace.loadingDataPlace(true)
            api.createNewCard(dataInput)
            .then(cardData=>{
                createCard(cardData)
            popupWithPlaceForm.close()
                    
            })
            .catch((err) => {
                console.log(`Произошла ошибка ${err}`);
              })
              .finally(() => {
                formValidatorPlace.loadingDataPlace(false)
              });
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
        handleFormSubmit:(userData)=>{
            formValidatorInfo.loadingData(true);
            api.postUserInfo(userData)
            .then(userData=>{
                console.log(userData);
                userInfo.setUserInfo(userData);
                
            })
            .catch((err) => {
                console.log(`Произошла ошибка ${err}`);
              })
              .finally(() => {
                formValidatorInfo.loadingData(false)
              });
        }
    });
    popupWithInfo.setEventListeners();



    const photo = new Avatar({avatarSelector: '.profile__avatar'});
    api.getUserInfoApi()
    .then((data)=>{
        userInfo.setUserInfo(data)
        photo.setAvatar(data);
    })
    .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });


editButton.addEventListener('click', ()=>{
    const getInfo = userInfo.getUserInfo();
    nameInput.value=getInfo.name;
    descriptionInput.value = getInfo.about;
    popupWithInfo.open();
    formValidatorInfo.resetValidation();
});


const avatarPopup = new PopupWithForm('.popup_name_avatar', avatarFormElement,{
    handleFormSubmit:(data)=>{
        formValidatorAvatar.loadingData(true)
        api.postAvatar(data)
        .then(data=>{
            photo.setAvatar(data);
        })
        .catch((err) => {
            console.log(`Произошла ошибка ${err}`);
          })
          .finally(() => {
            formValidatorAvatar.loadingData(false)
          });
        
    }
});

avatarPopup.setEventListeners();
avatar.addEventListener('click', ()=>{
    const getAvatar = photo.getPhotoLink();
    avatarInput.value=getAvatar.avatar;
    avatarPopup.open();
    formValidatorAvatar.resetValidation();
    formValidatorAvatar.inactiveButton();
})



















