//Eu não sei se você percebeu, mas por mais que a velocidade seja constante, os valores podem mudar.
const velocidade = document.getElementById("velocity");
//Acontece que o valor dela sempre vai ser "document.getElementById("velocity");" e isso é completamente imutável, mas os valores ASSOCIADOS a esse elemento, podem mudar infinitas vezes. Ou seja, o valor dela pode ser alterado indiretamente.

//pegar a "suavidade"
const transicao = document.getElementById("transition");

//pegar o botão de play-pause
const button = document.getElementById("button");

// vamos manipular a cor do body, e para isso é necessário temos uma referência a esse elemento no código javascript
const body = document.getElementsByTagName("body")[0];
// observe que utilizamos o "getElementsByTagName", ou seja, estamos pegando elementoS (no plural), o que nos retorna uma lista com todos os elementos dessa tag. Para pegar só o primeiro (e único) elemento com a tag body, utilizamos o [0] (elemento de indice zero).

//
//
//EVENT LISTENERS
//velocidade
let interval; //variavel para armazenar o interval
velocidade.addEventListener("input", function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(
    () => changeColor(body, generateRgb(), transicao.value),
    velocidade.value * 1000
  );

  if (button.src == "http://127.0.0.1:5500/images/play-button.png") {
    button.src = "http://127.0.0.1:5500/images/pause-button.png";
  }
  //esse if serve para "ligar" o botão caso esteja desligado, para assim começar a "rodar" o site de novo
});

//transicao
transicao.addEventListener("input", function () {
  body.style.transition = transicao.value + "s";
  console.log(transicao.value + "s");
  console.log(body.style.transition);

  //Adicionando um setInterval aqui também, para que o site também possa "começar" (iniciar a animação) a partir do botão de transição/suavidade
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(
    () => changeColor(body, generateRgb(), transicao.value),
    velocidade.value * 1000
  );

  if (button.src == "http://127.0.0.1:5500/images/play-button.png") {
    button.src = "http://127.0.0.1:5500/images/pause-button.png";
  }
  //mesma coisa que a velocidade
});

//botao pause-continue
button.addEventListener("click", function () {
  /*
  Como isso funciona? Quando o botão é clicado, o código verifica a src da imagem, para assim concluir se é o "play-button" ou o "pause-button". Ele basicamente troca as imagens. Se for para pausar, ele da um "clearInterval(interval), para assim parar a execução do intervalo e, consequentemente, do código. Se for para continuar, ele cria o intervalo (igual às outras funções) "
  */
  if (button.src == "http://127.0.0.1:5500/images/pause-button.png") {
    button.src = "http://127.0.0.1:5500/images/play-button.png";

    if (interval) {
      clearInterval(interval);
    }
  } else {
    button.src = "http://127.0.0.1:5500/images/pause-button.png";

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(
      () => changeColor(body, generateRgb(), transicao.value),
      velocidade.value * 1000
    );
  }
});

//
//
/*FUNÇÕES*/
//ler aquivo "funcoes"
function generateRgb() {''
  //Essa função vai retornar uma lista com 3 valores (RGB) aleatórios
  return [
    Math.trunc(Math.random() * 256),
    Math.trunc(Math.random() * 256),
    Math.trunc(Math.random() * 256),
  ]; //random -> aleatorio ; trunc -> tirar casas decimais
}
function changeColor(element, rgb, transition) {
  //element vai ser qual elemento que eu vou manipular, dando mais flexibilidade para a funçao (no nosso caso, vamos mexer apenas no body)
  element.style.backgroundColor =
    "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  //passando os valores do rgb recebidos pela função generateRgb

  body.style.transition = transition + "s";
  //para adicionar a transição
}
