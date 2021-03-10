
export default class UserInfo{
    constructor({nameSelector, descriptionSelector}){
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector= document.querySelector(descriptionSelector);
    };
    getUserInfo(){
        const item = {};
        item.name = this._nameSelector.textContent;
        item.description =this._descriptionSelector.textContent;
            
    return item;
    };
    
    setUserInfo({name, description}){
        this._nameSelector.textContent = name;
        this._descriptionSelector.textContent = description;   
    }
}