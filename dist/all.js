// DOM Selector
const btn = document.getElementById('popup_btn');
const popupEl = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-icon');
const counterEl = document.getElementById('counter');


// Counter
let counter = loadFromLocalStorage('counter');


// Functions
function openPopup() {
    popupEl.classList.add('popup__toggle');
}

function closePopup() {
    popupEl.classList.remove('popup__toggle');
}

function saveToLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

function loadFromLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key))
}


// Listeners
document.addEventListener('click', ()=> {
    counter++;
    saveToLocalStorage('counter', counter)
    counterEl.textContent = counter;
})

btn.addEventListener('click', ()=> {
    openPopup();
})

closePopupBtn.addEventListener('click', ()=> {
    closePopup();
})

popupEl.addEventListener('click', (event)=> {
    const isOutside = !event.target.closest('.popup__content');
    isOutside ? closePopup() : null;
})