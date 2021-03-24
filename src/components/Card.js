export default class Card {
  constructor(
    data,
    { ownerId, handleCardClick, handleDeleteClick, handleLike },
    elementSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardOwnerId = data.owner._id;
    this._cardId = data._id;
    this._cardLikes = data.likes;
    this._ownerId = ownerId;
    this._elementSelector = elementSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
  }
  _getTemplate() {
    const elemTemplate = document
      .querySelector(this._elementSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return elemTemplate;
  }

  isMyLike(likesArray, myUserId) {
    return (myUserId = likesArray.find(
      (userSetLike) => userSetLike._id === myUserId
    ));
  }

  getLikesCard() {
    return this._cardLikes;
  }

  setLikesCard(newDataCard) {
    this._cardLikes = newDataCard.likes;
  }

  setCalcLike(likesArray) {
    this._likeCalcElement.textContent = likesArray.length;
  }
  _setCardEventListeners(likeElement, deleteElement, cardElement) {
    likeElement.addEventListener("click", (evt) => {
      this._handleLike(evt);
    });
    deleteElement.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    cardElement.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  toggleLike(evt) {
    evt.target.classList.toggle("element__like_active");
  }

  render() {
    this._view = this._getTemplate();

    const like = this._view.querySelector(".element__like");
    this._likeCalcElement = this._view.querySelector(".element__calc-likes");
    this.setCalcLike(this._cardLikes);

    const deleteIcon = this._view.querySelector(".element__delete");
    if (this._cardOwnerId !== this._ownerId) {
      deleteIcon.remove();
    }
    if (this.isMyLike(this._cardLikes, this._ownerId)) {
      like.classList.add("element__like_active");
    }

    this._view.querySelector(".element__title").textContent = this._name;
    const imageElement = this._view.querySelector(".element__image");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._setCardEventListeners(like, deleteIcon, imageElement);

    return this._view;
  }

  handleDeleteCard() {
    this._view.remove();
    this._view = null;
  }
}

 