import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formElement, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = formElement;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".popup__text");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  handleSubmitDelete(handler) {
    this._handleFormSubmit = handler;
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}