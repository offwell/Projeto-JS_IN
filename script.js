window.addEventListener('load',()=>{
    let $btnAdd = document.querySelector('#btn-add')
    
    $btnAdd.addEventListener('click',activeModal())
})

function activeModal(){
    let $modal = document.querySelector('#modal')
    $modal.classList.toggle('modal-active')
}

function salvarTarefa(){
    
}