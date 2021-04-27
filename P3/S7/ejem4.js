
// accedemos al primer elemento, que es el cuerpo en este caso y solo hay uno

body = document.getElementsByTagName('body')[0];

// llamamos a la funcion de retrollamada de la tecla pulsada

window.onkeydown = (e) => {
    // comprobamos si la tecla pulsada es un espacio
    if(e.key == ' '){
        // si la tecla pulsada es un espacio cambiamos el color
        body.classList.toggle("color");
    }
}