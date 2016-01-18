var x = 50;  // Posicion X del personaje
var y = 249; // Posicion Y del personaje
var bgX = 0; // Posicion X del fondo
var bgY = 0; // Posicion Y del fondo
var WIDTH = 600; // Ancho del canvas
var HEIGHT = 385; // Alto del canvas

var bg = new Image(); // Fondo
var char = new Image(); // Personaje

// Inicia la pantalla de juego
function init() {
  bg.src = "media/background.png";
  char.src = "media/char.png";
  document.getElementById('music').play();
  update();
}

// Redibuja el canvas
function update() {
  var canvas = document.getElementById("miCanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, WIDTH, HEIGHT); // Limpia
  ctx.drawImage(bg, bgX, bgY); // Redibuja el fondo
  ctx.drawImage(char, x, y); // Redibuja el personaje
}

/*----- CONTROLES -----*/

function moveLeft() {
  // Desplaza el fondo hacia la izquierda si no ha llegado al final.
  // Si llega al final del fondo, lo bloquea y pasa el control al personaje

  if (bgX < 0 && bgX != -1200) {
    bgX += 4;
    update();
  }
  if (bgX == -1200 && x > 50) {
      x -= 4;
      update();
  }
}

function moveRight() {
  // Desplaza el fondo hacia la derecha si no ha llegado al final.
  // Si llega al final del fondo, lo bloquea y pasa el control al personaje

  if (x < 250 && bgX != -1200) {
    x += 4;
    update();
  }

  if (bgX == -1200 && x < 492) {
    x += 4;
    update();
  }

  if (bgX > -1200 && x == 250) {
    bgX -= 4;
    update();
  }
}

function keyPad(evt) {
  switch (evt.keyCode) {
      // Left arrow
    case 37:
      moveLeft();
      break;
      // Right arrow
    case 39:
      moveRight();
      break;
      // Up arrow
    case 38:
      break;
  }
}

window.addEventListener('keydown', keyPad, true);
