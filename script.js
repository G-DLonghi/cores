//Eu não sei se você percebeu, mas por mais que a velocidade seja constante, os valores podem mudar.
const velocidade = document.getElementById("velocity");
//Acontece que o valor dela sempre vai ser "document.getElementById("velocity");" e isso é completamente imutável, mas os valores ASSOCIADOS a esse elemento, podem mudar infinitas vezes. Ou seja, o valor dela pode ser alterado indiretamente.

const transicao = document.getElementById("transition");

// vamos manipular a cor do body, e para isso é necessário temos uma referência a esse elemento no código javascript
const body = document.getElementsByTagName("body")[0];
// observe que utilizamos o "getElementsByTagName", ou seja, estamos pegando elementoS (no plural), o que nos retorna uma lista com todos os elementos dessa tag. Para pegar só o primeiro (e único) elemento com a tag body, utilizamos o [0] (elemento de indice zero).

//EVENT LISTENERS
//velocidade
let interval;
velocidade.addEventListener("input", function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(
    () => changeColor(body, generateRgb()),
    velocidade.value * 1000
  );
});

//transicao
transicao.addEventListener("input", function () {
  body.style.transition = transicao.value + "s";
});

//ler aquivo "funcoes"

function generateRgb() {
  //Essa função vai retornar uma lista com 3 valores (RGB) aleatórios
  return [
    Math.trunc(Math.random() * 256),
    Math.trunc(Math.random() * 256),
    Math.trunc(Math.random() * 256),
  ]; //random -> aleatorio ; trunc -> tirar casas decimais
}
function changeColor(element, rgb) {
  //element vai ser qual elemento que eu vou manipular, dando mais flexibilidade para a funçao (no nosso caso, vamos mexer apenas no body)
  console.log(rgb);
  element.style.backgroundColor =
    "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  //passando os valores do rgb recebidos pela função generateRgb
}

console.log("aplicar fonte lexend giga do google");
