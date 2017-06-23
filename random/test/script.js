function contar() {
    var checkboxes = document.getElementById("test").checkbox; //Array que contiene los checkbox
    var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
    for (var x=0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            cont = cont + 1;
        }
    }
    
    var porcen = (cont/checkboxes.length)*100;
    
    if (cont == checkboxes.length) {
        alert("ZOMG. Eres ELLA.");
    } else {
        alert("Resultado: " + cont + "/" + checkboxes.length + ". Eso supone un " + porcen + "% de posibilidades de que seas ELLA.");
    }
}

function hi() {
    window.open('https://twitter.com/intent/tweet?text=¡Hola @HighLordIron!','Saludar','width=600,height=350');
}
