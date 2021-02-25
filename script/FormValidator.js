class FormValidator{
    constructor(validationObj, formElement){
        this._formSelector = validationObj.formSelector;
        this._inputSelector = validationObj.inputSelector;
        this._submitButtonSelector = validationObj.submitButtonSelector;
        this._activeButtonClass = validationObj.activeButtonClass;
        this._inactiveButtonClass = validationObj.inactiveButtonClass;
        this._inputErrorClass = validationObj.inputErrorClass;
        this._errorClass = validationObj.errorClass;
        this._formElement = formElement;
        this._buttonElement = formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
          
    }
    enableValidation() {
        this._setEventListeners();
      };
    resetValidation(){
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement)
        });
      }

    _setEventListeners(){
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(this._formElement, inputElement);
            this._toggleButtonState(this._inputList, this._buttonElement);
          });
        });
      };

      _checkInputValidity(formElement, inputElement){
        if (!inputElement.validity.valid) {
          this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
      };

      _showInputError (formElement, inputElement, errorMessage){
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
      };

      _hideInputError (inputElement){
        const errorElement = document.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
      };

      _toggleButtonState (inputList, buttonElement){
        if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
      } else {
         buttonElement.classList.remove(this._inactiveButtonClass);
         } 
      };

      _hasInvalidInput(inputList){
        return inputList.some((inputElement) => {
        
          return !inputElement.validity.valid;
        })
      }; 
}
  export default FormValidator;