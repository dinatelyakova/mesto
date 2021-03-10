
export default class Card{
    constructor(data,{handleCardClick}, elementSelector){
        this._name = data.name;
        this._link = data.link;
        this._elementSelector = elementSelector;
        this.handleCardClick = handleCardClick;
        
    }
    _getTemplate(){
        const elemTemplate = document
        .querySelector(this._elementSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return elemTemplate;
    }
    render(){
        this._view = this._getTemplate();
        this._view.querySelector('.element__title').textContent = this._name;
        const imageElement = this._view.querySelector('.element__image');
        imageElement.src = this._link;
        imageElement.alt = this._name;
        this._setEventListeners();

        return this._view;  
    }
   
 
    _setEventListeners(){
        this._view.querySelector('.element__delete').addEventListener('click', function(evt){
            evt.target.closest('.element').remove();
        });
        this._view.querySelector('.element__like').addEventListener('click', function (evt){
            evt.target.classList.toggle('element__like_active');
        });
        this._view.querySelector('.element__image').addEventListener('click',()=>{
            this.handleCardClick(this._name, this._link)
        });
    };

};

 