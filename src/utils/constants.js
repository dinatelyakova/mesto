const editButton = document.querySelector(".profile__edit");
const popups = document.querySelectorAll(".popup");
const closeButton = document.querySelector(".popup__close");
const formInfoElement = document.querySelector(".popup__form-info");
const saveButton = document.querySelector(".popup__submit");
const nameInput = document.querySelector(".popup__text_type_name");
const descriptionInput = document.querySelector(
  ".popup__text_type_description"
);
const descriptionProfile = document.querySelector(".profile__description");
const nameProfile = document.querySelector(".profile__name");
const createButton = document.querySelector(".button");
const titleInput = document.querySelector(".popup__text_type_title");
const linkInput = document.querySelector(".popup__text_type_link");
const deleteButton = document.querySelector(".element__delete");
const addButton = document.querySelector(".profile__add");
const placePopup = document.querySelector(".popup_name_place");
const placeCloseButton = document.querySelector(".popup__close_name_place");
const placeLike = document.querySelector("element__like");
const cardListSelector = document.querySelector(".elements");
const imagePopup = document.querySelector(".popup_name_image");
const imageCloseButton = document.querySelector(".popup__close_name_image");
const bigImage = document.querySelector(".popup__image");
const bigTitle = document.querySelector(".popup__image-title");
const formImageElement = document.querySelector(".popup__form-image");
const title = document.querySelector(".popup__text_type_title");
const image = document.querySelector(".popup__text_type_link");
const namePopup = document.querySelector(".popup_name_info");
const elementCard = document
  .querySelector(".element-template")
  .content.querySelector(".element")
  .cloneNode(true);
const avatar = document.querySelector(".profile__avatar");
const avatarFormElement = document.querySelector(".popup__form-avatar");
const avatarInput = document.querySelector(".popup__text_type_avatar");
const deleteInPopupButton = document.querySelector(".button_type_delete");
const formDeletePopup = document.querySelector(".popup__form-delete");

const initialCards = [
  {
    name: "Роза хутор",
    link:
      "https://images.unsplash.com/photo-1586204631355-dd4d7be575fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Камчатка",
    link:
      "https://images.unsplash.com/photo-1536730161541-3a56c434a66e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80",
  },
  {
    name: "Байкал",
    link:
      "https://images.unsplash.com/photo-1562315115-af334af65706?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Республика Коми",
    link:
      "https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Хребет Ицыл",
    link:
      "https://images.unsplash.com/photo-1517229349791-2af54b4cb18e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80",
  },
  {
    name: "Ольхон",
    link:
      "https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  },
];

const validationObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  activeButtonClass: "popup__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__text-line",
  errorClass: "popup__text-error_active",
};

export {
  formDeletePopup,
  deleteInPopupButton,
  avatarInput,
  avatarFormElement,
  avatar,
  createButton,
  elementCard,
  imagePopup,
  editButton,
  formInfoElement,
  nameInput,
  descriptionInput,
  descriptionProfile,
  nameProfile,
  addButton,
  placePopup,
  cardListSelector,
  bigImage,
  bigTitle,
  formImageElement,
  title,
  image,
  namePopup,
  initialCards,
  validationObj,
  popups,
};
