//Códigos das imagens e sons do jogo

//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//sons
let somDeFundo;
let somDoPonto;
let somDaColisao;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3,imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  somDeFundo = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
}