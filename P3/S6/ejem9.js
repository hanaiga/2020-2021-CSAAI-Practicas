console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");

// indico la posicion del objeto que vamos a animar

let x = 0;
let y = 10;

// defino la velicidad en direccion x
let velx = 1;

// esta es la funcion principal para animar

function update(){

    console.log("test");
    // ahora quiero que se mueva entonces defino el movimiento
    x = x + velx;
    // borro canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // dibujo los elementos
    ctx.beginPath();

    // le digo que dibuje un rectangulo en la coordenada 5,5 y de 100 *50
        ctx.rect(x,y, 20,20);

        // le digo el color de relleno
        ctx.fillStyle = 'red';

        // aplico el relleno
        ctx.fill();

        // muestro el contorno del rectangulo
        ctx.stroke();
        
    ctx.closePath();
    // que vuelva a ejecutar update cuando le toque
    requestAnimationFrame(update);
}

// llamo a la funion para que empieze a rular
update();