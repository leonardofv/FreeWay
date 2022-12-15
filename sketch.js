

function setup() {
  createCanvas(600, 400);
  somDeFundo.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentoDosCarros();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPonto();
  marcaPonto();
}






