//object literal

export const AlertaDeErro = {
   
    alertError: document.querySelector('.alert__error'),

    open(){
        AlertaDeErro.alertError.classList.add('open');
    },
    close(){
        AlertaDeErro.alertError.classList.remove('open');
    }
}

