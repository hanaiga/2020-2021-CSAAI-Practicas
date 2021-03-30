console.log('Ejecutando JS...');

const display = document.getElementById('dispaly');

const btn = document.getElementById('btn');

// inicializar contador

let cont = 0;

// funcion para que vaya contando cada vez q se toque boton

btn.onclick = () => {

    console.log('Click!');

    cont += 1;

    display.innerHTML = cont;
}