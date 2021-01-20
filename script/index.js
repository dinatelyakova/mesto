const editButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const saveButton = popup.querySelector('.popup__safety');
const nameInput = document.querySelector('.popup__text_type_name');
const descriptionInput = document.querySelector('.popup__text_type_descripion');
const descriptionProfile = document.querySelector('.profile__description');
const nameProfile = document.querySelector('.profile__name');
const createButton = document.querySelector('.popup__create');
const titleInput = document.querySelector('.popup__text_type_title');
const linkInput = document.querySelector('.popup__text_type_link');
const deleteButton = document.querySelector('.element__delete');
const addButton = document.querySelector('.profile__add');
const placePopup = document.querySelector('.popup_name_place');
const placeCloseButton = document.querySelector('.popup__close_name_place');
const placeLike = document.querySelector('element__like');
const elementGrid = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const imagePopup = document.querySelector('.popup_name_image');
const imageCloseButton = document.querySelector('.popup__close_name_image');
const bigImage = document.querySelector('.popup__image');
const bigTitle = document.querySelector('.popup__image-title');
const formImageElement= document.querySelector('.popup__form-image');
const title =  document.querySelector('.popup__text_type_title');
const image = document.querySelector('.popup__text_type_link');
const namePopup = document.querySelector('.popup_name_info');

const initialCards = [
    {
    name:'Роза хутор',
    link:'https://images.unsplash.com/photo-1586204631355-dd4d7be575fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
    name:'Камчатка',
    link:'https://images.unsplash.com/photo-1536730161541-3a56c434a66e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
    },
    {
    name:'Байкал',
    link:'https://images.unsplash.com/photo-1562315115-af334af65706?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
    name:'Республика Коми',
    link:'https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
    name:'Хребет Ицыл',
    link:'https://images.unsplash.com/photo-1517229349791-2af54b4cb18e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80'
    },
    {
    name:'Ольхон',
    link:'https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    },
];
//отображение темплейтов на странице
initialCards.forEach(function(item){
    elementGrid.prepend(createCard(item.link, item.name));
});

//создание новой картинки
function createCard(link = 'http://probablyprogramming.com/wp-content/uploads/2009/03/tinytrans.gif', name='Место в России') {
    const placeElement = elementTemplate.cloneNode(true);
    placeElement.querySelector('.element__image').src = link;
    placeElement.querySelector('.element__title').textContent = name;
    placeElement.querySelector('.element__delete').addEventListener('click', handlDelete);
    placeElement.querySelector('.element__like').addEventListener('click', likeElement);
    placeElement.querySelector('.element__image').addEventListener('click', () => increaseImage(link, name)); 
    elementGrid.prepend(placeElement);
    return placeElement;
 };
// открытие попапов
 function openModal(popup){
    popup.classList.add('popup_active');
 }
//закрытие попапов
 function closeModal(popup){
    popup.classList.remove('popup_active');
 }
 //лайки
function likeElement(evt){
    evt.target.classList.toggle('element__like_active');
}

 // кнопка удаления картинки
function handlDelete(evt) {
    evt.target.closest('.element').remove();
};
//кнопка добавления картинки
createButton.addEventListener('click', function(){
    createCard(image.value, title.value);
    title.value = title.placeholder;
    image.value = image.placeholder;
    closeModal(placePopup);
});

// попап с редактированием имени
function openPopupName(){
    openModal(namePopup);
    nameInput.textContent = nameProfile.value;
    descriptionInput.textContent = descriptionProfile.value;
};

// отправка имени
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;   
};

//отправка картинки
function handleSubmit(evt){
    evt.preventDefault();
    placeElement.src = linkInput.value;
    placeElement.textContent = titleInput.value;
    
};

//занесение данных в попап с картинкой
function increaseImage(link, name){
        bigImage.src = link;
        bigTitle.textContent = name;
        bigImage.alt = name;
        openModal(imagePopup);
    }
    
addButton.addEventListener('click', () => openModal(placePopup));
imageCloseButton.addEventListener('click', () => closeModal(imagePopup));
formImageElement.addEventListener('submit', handleSubmit);
formElement.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', ()=> closeModal(namePopup));
closeButton.addEventListener('click', ()=> closeModal(namePopup));
editButton.addEventListener('click', openPopupName);
placeCloseButton.addEventListener('click',() => closeModal(placePopup));