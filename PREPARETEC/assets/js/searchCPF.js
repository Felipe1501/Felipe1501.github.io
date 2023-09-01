const cpf = document.getElementById('cpf');

cpf.addEventListener('keypress', (e)=>{
    let inputLength = cpf.value.length;
    if(inputLength == 3 || inputLength == 7){
        cpf.value += '.';
    }else if(inputLength == 11){
        cpf.value += '-';
    }

    if(e.keyCode>=48 && e.keyCode<=57){
        return true;
     }else{
         e.preventDefault();
     }
})

const btnSubmit = document.getElementById('form-submit');

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
})