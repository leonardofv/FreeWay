//Códigos do Ator

let yAtor = 367;
let xAtor = 150;
let colisao = false;

let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor,xAtor,yAtor, 30, 30);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 367){
      yAtor += 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(xAtor < 570) {
       xAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(xAtor > 5){
      xAtor -= 3;
    }
  }
}

//código collide.2d
function verificaColisao(){
  //collideRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
  for(let i = 0; i < imagemDosCarros.length; i++){
     colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 13)
    if(colisao){
      colidiu();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
         meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 367
}

function mostraPonto() {
  textSize(30);
  fill(color(255,0,0));
  text(meusPontos,100,28);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos+=1;
    somDoPonto.play();
    colidiu();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}


