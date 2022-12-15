//Códigos do Carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [325, 270, 215, 45, 100, 155];
let velocidadeCarros = [4.5, 6.5, 9, 6.3, 7, 5.5];
let comprimentoCarro = 40;
let alturaCarro = 35;

function mostraCarro() {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentoDosCarros() {
  for(let i = 0; i < imagemDosCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for(let i = 0; i < imagemDosCarros.length; i++){
    if(passouTodaATela(xCarros[i])) {
      xCarros[i] = 600
  }
  }
}

function passouTodaATela(xCarro) {
  return xCarro  < -50
}





  
  



