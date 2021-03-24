export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const item = {};
    item.name = this._nameElement.textContent;
    item.about = this._descriptionElement.textContent;

    return item;
  }

  setUserInfo(item) {
    this._nameElement.textContent = item.name;
    this._descriptionElement.textContent = item.about;
  }

  setUserId(item) {
    this._userId = item._id;
  }

  getUserId() {
    return this._userId;
  }
}