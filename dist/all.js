// DOM Selector
const btn = document.getElementById('popup_btn');
const popupEl = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-icon');
const counterEl = document.getElementById('counter')


// Counter
let counter = 0;


// Functions
function openPopup() {
    popupEl.classList.add('popup__toggle');
}

function closePopup() {
    popupEl.classList.remove('popup__toggle');
}



// Listeners
document.addEventListener('click', event => {
    counter++;
    console.log(counter);
    counterEl.textContent = counter;

})

btn.addEventListener('click', ()=> {
    openPopup();
})

closePopupBtn.addEventListener('click', ()=> {
    closePopup();
})

popupEl.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.popup__content');
    isOutside ? closePopup() : null;
})