var porcen = null;

function contar() {    
    var checkboxes = document.getElementById("test").checkbox; //Array que contiene los checkbox
    var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
    
    for (var x=0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            cont = cont + 1;
        }
    }
    
    porcen = Math.round((cont/checkboxes.length)*100);
    var box = document.getElementById('modal').children[0].children[1];

    
    if (cont == checkboxes.length) {
        box.innerHTML = "ZOMG. Eres ELLA.";
    } else {
        box.innerHTML = "Resultado: " + cont + "/" + checkboxes.length + ". Eso supone un " + porcen + "% de posibilidades de que seas ELLA.";
    }

    document.getElementById('modal').style.display = 'block';
}

function hi() {
    window.open(encodeURI('https://twitter.com/intent/tweet?text=¡Hola @HighLordIron!'),'Saludar','width=600,height=350');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function share() {
    let str = encodeURI("Hola @HighLordIron, he sacado un " + porcen + "% en tu test de 'La Mujer Perfecta'. - http://juanjosalvador.me/random/test/");
    window.open('https://twitter.com/intent/tweet?text=' + str,'Saludar','width=600,height=350');
}