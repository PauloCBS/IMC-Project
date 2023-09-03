
//object
 export const Modal = {

    wrapper: document.querySelector('.modal__wrapper'),
    modalMessage: document.querySelector('.title'),
    btnClose: document.querySelector('.botao__close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}


//Modal Close

Modal.btnClose.onclick = function(){
    Modal.close();
 }
 function handleEscape(event){

    console.log(event.key)

    if(event.key == 'Escape'){
        Modal.close();
    }
}

window.addEventListener('keydown', handleEscape)