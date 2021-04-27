console.log("Ejecutando JS...");

const click = document.getElementById("click");
const what = document.getElementById("what");

// cargamos los sonidos que vamos a usar

const click_sound = new Audio('click.mp3');
const what_sound = new Audio('what.mp3');

click.onclick = () => {
    // ponemos el tiempo a cero para que el sonido se reproduzca de nuevo
    click_sound.currentTime = 0;
    // reproducimos 
    click_sound.play();
}

what.onclick = () => {
    what_sound.currentTime = 0;
    what_sound.play();
}