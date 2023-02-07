const nameU = document.querySelector('#form-name')
const mail = document.querySelector('#form-email')
const pic = document.querySelector('#form-picture')
const passwordU = document.querySelector('#form-password')

async function cadUser() {
    const data = {
        username: nameU.value,
        email: mail.value,
        password: passwordU.value,
        avatar: pic.value
    } 
    
    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data) 
    }
    
    const responseJSON = await fetch('http://localhost:3333/users/create', options)
    const response = await responseJSON.json()
  
    console.log(response)
}

async function loginUser() {
    const data = {
        email: mail.value,
        password: passwordU.value,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    
    try{
        const responseJSON = await fetch('http://localhost:3333/login', options) 
        const response = await responseJSON.json()
        home(response.token)
    }   
    catch(err){
        alert(err.statuscode)
    }

}
async function home(token){
    const profileAcess={
        method: 'GET',
        headers:{
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        }
    }

    const returnProfile = await fetch('http://localhost:3333/users/profile', profileAcess)
    profileJSON = await returnProfile.json()
    
    if(returnProfile.status === 200){
        window.location.href = '/pages/home/home.html'
        return profileJSON
    }else
    if(returnProfile.status === 400){
        const buttonPassword = document.querySelector('#form-password')

        buttonPassword.setAttribute('id','button-red')
    }
    
    
}

