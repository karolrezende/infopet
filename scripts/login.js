const form = document.querySelector('#form')
function onLogin(){
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
    })
}