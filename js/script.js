const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

function rotacaorelogio(){

    let horaAtual = new Date();

    let hora = horaAtual.getHours();
    let min = horaAtual.getMinutes();
    let seg = horaAtual.getSeconds();

    let posicaoHora = (hora*360/12)+(min*(360/60)/12);
    let posicaoMin = (min*360/60)+(seg*(360/60)/60);
    let posicaoSeg = seg*360/60;

    PONTEIROHORA.style.transform = "rotate(" + posicaoHora + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}

var movimento = setInterval(rotacaorelogio, 1000);
