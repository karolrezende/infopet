import { posts } from "./post.js"


const post = document.querySelector('#postlist')

function renderApi(){
    posts.forEach(element => {
        post.innerHTML += 
            `<div class="flex justify-between mt-5 data-control-modal">
                <div class="flex gap-4">
                    <img src="${element.avatar}" alt="profile-pic" class='img-profile'>
                    <h2>${element.name}</h2>
                    <span>|</span>
                    <p class="text-[#868E96]">${element.date}</p>
                </div>
                <div class="flex gap-3">
                    <button class="button-white" data-control-edit >Editar</button>
                    <button class="button-gray-mini" data-control-delete>Excluir</button>
                </div>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-medium">${element.title}</h1>
                <p class="font-normal mt-4 text-base">${element.post}</p>
                <p class="text-[#364FC7] text-base cursor-pointer font-medium mt-4" data-control-acess>Acessar publicação</p>
            </div>`
    });
}renderApi()

function modalRender(){
    const modal = document.querySelector('.modal-control')
    const modalDiv = document.querySelector('.modal-modal')
    const acess = document.querySelectorAll('[data-control-acess]')
    
    for(let i = 0; i < acess.length; i++){
        acess[i].addEventListener('click', ()=>{
            modal.classList.add('modal-show-show')
            modalDiv.innerHTML = `
            <div class="flex gap-4  justify-between">
                <div class='flex gap-4 '>
                    <img src="${posts[i].avatar}" alt="profile-pic" class='img-profile'>
                    <h2 class='text-center'>${posts[i].name}</h2>
                    <span>|</span>
                    <p class="text-[#868E96]">${posts[i].date}</p>
                </div>
                <div><button id='button-closer' data-control-close onclick=${close(i)} class='button-gray-mini'>X</button></div>               
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-medium">${posts[i].title}</h1>
                <p class="font-normal mt-4 text-base">${posts[i].post}</p>
            </div>
                ` 
        })
    }
}modalRender()
