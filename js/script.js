const x = 10;
console.log(x);

const cielo = document.getElementById('cielo');

for(let i = 0; i<5;i++){
    cielo.innerHTML+='⭐️';

}

const planetas = ['🌍', '🪐', '☀️'];

for (const planeta of planetas){
    cielo.innerHTML+=planeta;
}

let n = 0;
while (n<5){
    cielo.innerHTML+='🌩️';
    n++;
}

let m = 0
do {
    cielo.innerHTML+='🚀';
    m++;
}while (m<4);

const btnEstrella = document.getElementById('botonEstrella');

//eventos


btnEstrella.addEventListener('click', ()=>{
    cielo.innerHTML+='⭐️';
    console.log('Se agregó una estrella');
})


const btnPlaneta = document.getElementById('botonPlaneta');
console.log("executed")
btnPlaneta.addEventListener('dblclick', ()=>{

    cielo.innerHTML+='🪐';
    console.log('Se agregó un planeta');
})

const inputEmoji = document.getElementById('inputEmoji');
const btnAgregarEmoji = document.getElementById('botonAgregarEmoji');

btnAgregarEmoji.addEventListener('click', ()=>{
    var emoji = inputEmoji.value.trim();
    if (emoji) cielo.innerHTML+=emoji;
    inputEmoji.value = '';
})

inputEmoji.addEventListener('keydown', e=>{
    if (e.key === 'Escape') cielo.innerHTML='';


})