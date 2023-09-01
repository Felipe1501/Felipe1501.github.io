const btnToggle = document.getElementById('toggleMenu');

btnToggle.addEventListener('click', ()=>{
    document.getElementById('nav').classList.toggle('active');
    console.log('click')
});

const input = document.getElementsByName('comment-input');

for(var i = 0; i < input.length; i++){
    input[i].addEventListener('keypress', ()=>{
        console.log(input[i])
    })
}