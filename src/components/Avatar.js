export default class Avatar{
    constructor({avatarSelector}){
        this._avatarElement=document.querySelector(avatarSelector)
    };
    getPhotoLink(){
        const inputData = {};
        inputData.avatar = this._avatarElement.src;
        return inputData;
    };
    setAvatar(inputData){
        this._avatarElement.src = inputData.avatar;
    } 
}