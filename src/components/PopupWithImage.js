import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageInPopup = this._popupSelector.querySelector(".popup__image");
    this._titleInPopup = this._popupSelector.querySelector(".popup__image-title");
  }
  open(name, link) {
    this._imageInPopup.src = link;
    this._titleInPopup.textContent = name;
    this._titleInPopup.alt = name;
    super.open();
  }
}