let campoIdade;
let campoMusicaAnimada;
let campoMusicaLenta;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de artistas");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAnimado = createCheckbox("Gosta de musica animada?");
  campoLento = createCheckbox("Gosta de musica lenta?");
  campoTriste = createCheckbox("Gosta de musica triste?")
}
function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeAnimado = campoAnimado.checked();
  let gostaDeLento = campoLento.checked();
  let gostaDeTriste = campoTriste.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAnimado, gostaDeLento, gostaDeTriste);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAnimado, gostaDeTriste) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Sabrina Carpenter";
    } else {
      if (idade >= 12) {
        if(gostaDeAnimado || gostaDeTriste) {
          return "Billie Eilish";          
        } else{
         return "Lana Del rey";
        }
      } else {
        if (gostaDeTriste) {
          return "TV Girl";
        } else {
          return "Mitsiki";
        }
      }
    }
  } else {
    if (gostaDeAnimado) {
      return "Doja Cat";
    } else {
      return "Ariana Grande";
    }
  }
}
