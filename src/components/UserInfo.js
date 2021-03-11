
export default class UserInfo{
    constructor({nameSelector, descriptionSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._descriptionElement= document.querySelector(descriptionSelector);
    };
    getUserInfo(){
        const item = {};
        item.name = this._nameElement.textContent;
        item.description =this._descriptionElement.textContent;
            
    return item;
    };
    
    setUserInfo({name, description}){
        this._nameElement.textContent = name;
        this._descriptionElement.textContent = description;   
    }
}