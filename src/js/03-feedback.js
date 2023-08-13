var throttle = require('lodash.throttle');

const STORAGE_KAY = "feedback-form-state"

const form = document.querySelector('.feedback-form')

const formData = {}

onEnter() 

form.addEventListener('input', throttle(onInput, 500))

form.addEventListener('submit', onSubmit)


function onSubmit(e) {
    e.preventDefault()

e.currentTarget.reset()

    console.log(JSON.parse(localStorage.getItem(STORAGE_KAY)))

    localStorage.removeItem(STORAGE_KAY)
}

function onInput(e) {
    formData[e.target.name] = e.target.value
localStorage.setItem(STORAGE_KAY, JSON.stringify(formData))
}

function onEnter() {
    const sevedMassege = localStorage.getItem(STORAGE_KAY)
    if (sevedMassege) {
      form.email.value = JSON.parse(sevedMassege).email || ''
      form.message.value = JSON.parse(sevedMassege).message || ''
    } 
    
    }