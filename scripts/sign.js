const user = document.querySelector('#form-name')
const email = document.querySelector('#form-email')
const avatar= document.querySelector("#form-picture")
const password = document.querySelector('#form-password')
const button = document.querySelector('#button-sign')

const form = document.querySelector('#form')
const modal = document.querySelector('#modal')
function modalShow(){
    form.addEventListener('submit', event=>{
        event.preventDefault()
        modal.classList.toggle('modal-show')
    })
}

function checkRequired(){
    if(user.value === '' || email.value === ''||avatar.value===''||password.value===""){
        button.classList.toggle('button-disabled')
    }else{
        button.classList.remove('button-disabled')
    }
}checkRequired()

function checkRequiredTrue(){
    if(user.value > 0 || email.value>0||avatar.value > 0||password.value > 0){
        button.classList.remove('button-disabled')
    }
      
}checkRequiredTrue()
