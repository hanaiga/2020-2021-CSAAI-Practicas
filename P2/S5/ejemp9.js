console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito");

function digito(value){

    console.log("valor: " + value);
}

for (let boton of botones) {

    //-- Establecer la funcion de llamada del boton i
    //-- El parámetro ev.target contiene el boton
    //-- que ha recibido el click
    boton.onclick = (ev) => {
        digito(ev.target.value)
    }
}