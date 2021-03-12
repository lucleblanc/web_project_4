//Wrappers
const addCardPopupWindow = document.querySelector('.popup__type_add-card');
const editProfilePopupWindow = document.querySelector('.popup__type_edit-profile');
const imagePopupWindow = document.querySelector('.popup__type_image');
//OpenButtons
const editButton = document.querySelector('.profile__edit-btn');
const addCardPopupButton = document.querySelector('.profile__add-btn');
//CloseButtons
const closeButton = editProfilePopupWindow.querySelector('.popup__close');
const closeAddCardPopupButton = addCardPopupWindow.querySelector('.popup__close');
const closeImagePopupButton = imagePopupWindow.querySelector('.popup__img-close');
//Buttons and other DOM Elements
const form = document.querySelector('.popup__form');
const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const addCardForm = document.querySelector('.popup__form_type_add-card');



//Form Inputs

const nameInput = document.querySelector('.popup__input_type_name');
const descInput = document.querySelector('.popup__input_type_desc');
//Profile
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');

const openPopup = document.querySelector('.popup_open');


function togglePopup(modal) {
  modal.classList.toggle('popup_open');

  if (editProfilePopupWindow.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    descInput.value = profileDesc.textContent;
  }
}

editButton.addEventListener('click', () => {
  togglePopup(editProfilePopupWindow);
});

closeButton.addEventListener('click', () => {
  togglePopup(editProfilePopupWindow);
});

function submitForm(event) {
  event.preventDefault()
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  togglePopup(editProfilePopupWindow)
}

editProfileForm.addEventListener('submit', submitForm);

//Sprint 5 functions

addCardPopupButton.addEventListener('click', () => {
  togglePopup(addCardPopupWindow)
  addCardPopupWindow.classList.add('popup_open');
})

closeAddCardPopupButton.addEventListener('click', () => {
  togglePopup(addCardPopupWindow);
})

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const cardTemplate = document.querySelector('#card-template').content.querySelector('.elements__card');
const elements = document.querySelector('.elements__card-list');

function createNewCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__card-img');
  const cardTitle = cardElement.querySelector('.elements__card-title');
  const cardLikeButton = cardElement.querySelector('.elements__like-btn');
  const cardDeleteButton = cardElement.querySelector('.elements__delete-btn');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('elements__like-btn_active')
  })

  cardDeleteButton.addEventListener('click', () => {
    cardElement.remove();
  })

  cardImage.addEventListener('click', () => {
    const popupImage = imagePopupWindow.querySelector('.popup__image');
    const popupImageTitle = imagePopupWindow.querySelector('.popup__image-title');

    popupImage.src = data.link;
    popupImageTitle.textContent = data.name;

    togglePopup(imagePopupWindow);

  })

  elements.prepend(cardElement);

}


initialCards.forEach(data => {
createNewCard(data)
})

closeImagePopupButton.addEventListener('click', () => {
  togglePopup(imagePopupWindow);
})


const titleInput = addCardPopupWindow.querySelector('.popup__input_type_card-title');
const urlInput = addCardPopupWindow.querySelector('.popup__input_card-url');


function addCardFormSubmitHandler(event) {
  event.preventDefault();

  const newCardData = {
      name: titleInput.value,
      link: urlInput.value,
  }
  createNewCard(newCardData);
}

addCardForm.addEventListener('submit', addCardFormSubmitHandler);


