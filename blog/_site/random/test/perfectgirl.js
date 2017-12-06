var score

function modal(id) {
    let modal = document.getElementById(id)
    return {
        show: function() {
            modal.style.display = 'block'
        },
        close: function() {
            modal.style.display = 'none'
        }
    }
}

function contar() {    
    let checkboxes = document.getElementById("test").checkbox
    let box        = document.getElementById('resultado')  
    let cont       = 0    
    
    checkboxes.forEach(function(item) {
        if (item.checked) {
            cont = cont + 1
        }
    })
    
    score = Math.round((cont / checkboxes.length) * 100)

    if (score === 100) {
        box.innerHTML = "ZOMG. Eres ELLA.";
    } else {
        box.innerHTML = "Resultado: " + cont + "/" + checkboxes.length + ". <br/>Existe una posibilidad del " + score + "% de que seas ELLA.";
    }

    modal('modal').show()
}

function hi() {
    window.open(encodeURI('https://twitter.com/intent/tweet?text=¡Hola @HighLordIron!'),'Saludar','width=600,height=350');
}

function closeModal() {
    modal('modal').close()
}

function share() {
    let str = encodeURI("Hola @HighLordIron, he sacado un " + score + "% en tu test de 'La Mujer Perfecta'. - http://juanjosalvador.me/random/test/");
    window.open('https://twitter.com/intent/tweet?text=' + str,'Saludar','width=600,height=350');
}