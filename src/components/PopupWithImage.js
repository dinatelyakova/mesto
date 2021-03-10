import Popup from './Popup.js';


export default class PopupWithDefault extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        
    }
    open(name, link){
        const imageInPopup = this._popupSelector.querySelector('.popup__image');
        const titleInPopup = this._popupSelector.querySelector('.popup__image-title');
        imageInPopup.src = link;
        titleInPopup.textContent = name;
        titleInPopup.alt = name;
        super.open();
    }
}