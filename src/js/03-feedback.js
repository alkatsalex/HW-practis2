var throttle = require('lodash.throttle');

const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form')

const formData = {}

onEnter() 

form.addEventListener('input', throttle(onInput, 500))

form.addEventListener('submit', onSubmit)


function onSubmit(e) {
    e.preventDefault()

e.currentTarget.reset()

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))

    localStorage.removeItem(STORAGE_KEY)
}

function onInput(e) {
    formData[e.target.name] = e.target.value
// localStorage.setItem(STORAGE_KAY, JSON.stringify(Object.assign({}, formData)))
saveFormData()
}

function onEnter() {
    const sevedMassege = localStorage.getItem(STORAGE_KEY)
    if (sevedMassege) {
      form.email.value = JSON.parse(sevedMassege).email || ''
      form.message.value = JSON.parse(sevedMassege).message || ''
    } 
    
    }

    function saveFormData() {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        
        // Перевіряємо, чи поля вже існують, тоді лише оновлюємо їх значення
        savedData.email = formData.email || savedData.email || '';
        savedData.message = formData.message || savedData.message || '';
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    }