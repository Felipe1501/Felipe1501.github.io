const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const pulo = () => {
    mario.classList.add('pulo');   
    
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    console.log(loop);
    
    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if(tuboPosicao <= 120 && tuboPosicao > 0 && marioPosicao < 110){
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${tuboPosicao}px`;
        
        mario.src ='./imagens/game-over.png';
        mario.style.width ='75px';
        mario.style.marginLeft = '50px';
        
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo); 