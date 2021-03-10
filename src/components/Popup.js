
export default class Popup{
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open(){
        this._popupSelector.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this._popupSelector.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_active');
            this.close(openedPopup);
          }
    }

    setEventListeners(){
        this._popupSelector.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__close')){
            this.close();
        }
    })
}

}