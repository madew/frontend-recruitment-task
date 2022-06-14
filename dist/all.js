// DOM Selector
const btn = document.getElementById('popup_btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-icon');


btn.addEventListener('click', ()=> {
    popup.classList.add('popup__toggle');
})

closePopupBtn.addEventListener('click', ()=> {
    popup.classList.remove('popup__toggle');
})

popup.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.popup__content')
    if (isOutside) {
        popup.classList.remove('popup__toggle');
    }
})