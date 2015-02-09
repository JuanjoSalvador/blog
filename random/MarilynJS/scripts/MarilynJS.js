var x = 200, y = 400;  // Coordenadas iniciales de la imagen

function lienzo() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("pj");
			
	ctx.clearRect(0, 0, 500, 500);  // Limpia todo el canvas 
	ctx.drawImage(img, x, y);  // Dibuja la imagen

}

// Controles

function whichButton(event) {
	if (event.keyCode == '39') { // Derecha
		x = x + 3;  
		lienzo();
	}

	if (event.keyCode == '37') { // Izquierda
		x = x - 3;
		lienzo();
	}

	if (event.keyCode == '38') { // Arriba
		y = y - 3; 
		lienzo();
	}

	if (event.keyCode == '40') { // Abajo
		y = y + 3;
		lienzo();
	}
}