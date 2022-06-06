const celulasElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const mensagemWinTxt = document.querySelector("[data-mensagem-wintxt]");

const mensagemWin = document.querySelector("[data-mensagem-win]");
const btnReiniciar = document.querySelector("[data-reiniciar]");

let vezCirculo;

const combsVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const comecarJogo = () => {
    vezCirculo = false;
    for (const cell of celulasElements) {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true});
    }
    

    setBoard();
    mensagemWin.classList.remove("show-mensagem-win");
};

const finalJogo = (empate) => {
    if (empate) {
        mensagemWinTxt.innerHTML = 'EMPATE!!!';
    } else{
        mensagemWinTxt.innerHTML = vezCirculo ? 
        "O VENCEU!!!" :  "X VENCEU!!!";
    }

    mensagemWin.classList.add("show-mensagem-win");
};

const checarQualWin = (JogadorAtual) => {
    return combsVitoria.some(combinacao => {
        return combinacao.every(index => {
            return celulasElements[index].classList.contains(JogadorAtual);
        });
    });
};

const checarEmpate = () => {
    return [...celulasElements].every(cell => {
       return cell.classList.contains('x') ||
        cell.classList.contains('circle');
    });
};

const placeMark = (cell, addClasse) => {
    cell.classList.add(addClasse);
    
};

const setBoard = () => {
    board.classList.remove('circle');
    board.classList.remove('x');

    if(vezCirculo){
        board.classList.add('circle');
    }else{
        board.classList.add('x');
    }
}

const mudarSimbolo = () => {
    vezCirculo = !vezCirculo;

    setBoard();

};

const handleClick = (e) => {
    //colocar X ou Circulo
    const cell = e.target;
    const addClasse = vezCirculo ? 'circle' : 'x';

    placeMark(cell, addClasse);


    //checar se há vencedor
    const vencedor = checarQualWin(addClasse);
    //checar se houve empate
    const empate = checarEmpate();
    if (vencedor){
        finalJogo(false);
    } else if (empate) {
        finalJogo(true);
    }else {
        //mudar simbolo (X ou CIRCULO)
    
        mudarSimbolo();
    }



};


comecarJogo();

btnReiniciar.addEventListener('click', comecarJogo);