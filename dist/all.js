// DOM Selector
const btn = document.getElementById('popup_btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-icon');

function openPopup() {
    popup.classList.add('popup__toggle');
}

function closePopup() {
    popup.classList.remove('popup__toggle');
}


btn.addEventListener('click', ()=> {
    openPopup();
})

closePopupBtn.addEventListener('click', ()=> {
    closePopup()
})

popup.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.popup__content')
    isOutside ? closePopup() : null
})