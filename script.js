import { Modal } from "./modal.js";
import { AlertaDeErro } from "./alertError.js";

// variaveis
//formulario
const form = document.querySelector('form');
const pesoInput = document.querySelector('.form__peso__input');
const alturaInput = document.querySelector('.form__altura__input');
const input = document.querySelectorAll('input');

function validacao(valor){
    return isNaN(valor)|| valor == "" || valor <= 0;
}


// funções
form.onsubmit = function(event){
    event.preventDefault();

    const peso = pesoInput.value;
    const altura = alturaInput.value;

    const resultado = calculoDeIMC(peso, altura);
    
    const validaInfo = validacao(peso) || validacao(altura);
    
    if(validaInfo == true){

       AlertaDeErro.open();

    } else{

        const messageIMC =  `Seu IMC é de ${resultado}`;
        Modal.modalMessage.innerText = messageIMC;
        Modal.open();
        AlertaDeErro.close();
    }
}

function calculoDeIMC(peso, altura){
    return(peso/((altura/100)**2)).toFixed(2);
}


function validaInput(event){

    AlertaDeErro.close();
}

alturaInput.onclick = validaInput;
pesoInput.onclick = validaInput;





