const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const descInput = document.querySelector('.popup__input_type_desc');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.popup_open');


function togglePopup() {
    popup.classList.toggle('popup_open');

    if (popup.classList.contains('popup_open')) {
        nameInput.value = profileName.textContent;
        descInput.value = profileDesc.textContent;
    }
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = nameInput.value;
    profileDesc.textContent = descInput.value;
    togglePopup()
}

form.addEventListener('submit', submitForm);



