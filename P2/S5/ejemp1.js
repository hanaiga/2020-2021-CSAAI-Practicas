console.log("Ejecutando JS...");

const display = document.getElementById("display");

const boton = document.getElementById("boton");

// inicializar contador

let cont = 0;

// funcion para que vaya contando cada vez q se toque boton

boton.onclick = () => {

    console.log("click!");

    cont += 1;

    display.innerHTML = cont;
}
