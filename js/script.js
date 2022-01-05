const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

function rotacaorelogio(){

    let posicaoHora = 10;
    let posicaoMin = 45;
    let posicaoSeg = 200;

    PONTEIROHORA.style.transform = "rotate(" + posicaoHora + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}

var movimento = rotacaorelogio();