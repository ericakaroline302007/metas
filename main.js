const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[iclassList.add("ativo");
        textos[i].classList.add("ativo");
    }].
}
//cria as constantes e a lista "tempo" dos objetivos ou metas
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-02-02T00:00:00");
const tempoObjetivooObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
2 = new Date("2024-12-15T00:00:00");
const tempoObjetivo3 = new Date("2024-11-30T00:00:00");
const tempoObjetivmp
function calculaTeo4 = new Date("2024-06-30T00:00:00");
//constante da lista dos tempos de objetivo
const tempos = [tempo(tempoObjetivo) {
    let tempoAtual = new Date(); //obtem a data atual
    let tempoFinal = th.floor(tempoFinal / 1000); //calcula os segundos restantes
    let minutos = MathtempoObjetivo - tempoAtual; //calcula o tempo final restante
    let segundos =th.floor(minutos / 60);//calcula as horas restantes
    let dias = Mat Ma.floor(segundos / 60);//calcula os minutos restantes
    let horas = Mah.floor(horas / 24);//calcula os dias restantes
   
    segundos %= 60;  //obtem o resto da divisão dos segundos
    minutos %= 60;   //obtem o resto da divisão dos minutos
    horas %= 24;    //obtem o resto da divisão das horas

//a partir daqui fazer o da tela
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();