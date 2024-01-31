const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
let capituloAtual = document.getElementById('capitulo');

let taTocando = 0;
let capitulo = 1;
const numeroCapitulos = 10;

// Função criada para evitar repetição desnecessária de código
function Procedimento(){
    audioCapitulo.src = `./books/dom-casmurro/${capitulo}.mp3`;
    capituloAtual.innerHTML = `Capítulo ${capitulo}`;
    tocarFaixa();
    taTocando = 1;
}

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if(taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

function avancarFaixa(){
    if(capitulo === numeroCapitulos){
        capitulo = 1;
    }else{
        capitulo = capitulo + 1;
    }
    Procedimento();
}

function voltarFaixa(){
    if(capitulo <= 1){
        capitulo = 10;
    }else{
        capitulo = capitulo - 1;
    }
    Procedimento();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', avancarFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);