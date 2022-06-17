// DOM Selector
const btn = document.getElementById('popup_btn');
const popupEl = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-icon');
const counterEl = document.getElementById('counter');
const resetBtn = document.querySelector('.popup__btn')


// Set counter element
counterEl.textContent = loadFromLocalStorage('counter');


// Functions
function openPopup() {
    popupEl.classList.remove('hide-element');
}

function closePopup() {
    popupEl.classList.add('hide-element');
}

function saveToLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

function loadFromLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key))
}


// Listeners
resetBtn.addEventListener('click', (event)=> {
    saveToLocalStorage('counter', 0);
    counterEl.textContent = loadFromLocalStorage('counter');
    resetBtn.classList.add('hide-element')
})


btn.addEventListener('click', ()=> {
    openPopup();
       
    saveToLocalStorage('counter', loadFromLocalStorage('counter') + 1)
    counterEl.textContent = loadFromLocalStorage('counter');
    

    if (loadFromLocalStorage('counter') > 5) {
        resetBtn.classList.remove('hide-element')
    }
})

closePopupBtn.addEventListener('click', ()=> {
    closePopup();
})

popupEl.addEventListener('click', (event)=> {
    const isOutside = !event.target.closest('.popup__content');
    isOutside ? closePopup() : null;
})

