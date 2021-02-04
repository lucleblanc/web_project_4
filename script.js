const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const descInput = document.querySelector('.popup__input_type_desc');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
// const likeButton = document.querySelector('.elements__like-btn');

// document.querySelectorAll('.elements__like-btn').forEach(item => {
//     item.addEventListener('click', event => {
//     classList.toggle('elements__like-btn_liked')
//     })
//   })

form.addEventListener('submit', (event) => {
    event.preventDefault()
    profileName.textContent = nameInput.value;
    profileDesc.textContent = descInput.value;
    togglePopup()
    
})

function togglePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('popup__open'); 
    const header = document.querySelector('.header__logo')
    header.classList.toggle('header__logo_popup')
}

editButton.addEventListener('click', togglePopup) 
closeButton.addEventListener('click', togglePopup) 


