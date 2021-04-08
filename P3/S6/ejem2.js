console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

// para obtener el contexto, osea 2D o 3D

const ctx = canvas.getContext("2d");

// al dibujar el objeto lo delimitaremos por begin path y close path

ctx.beginPath();

    // le digo que dibuje un rectangulo en la coordenada 5,5 y de 100 *50
    ctx.rect(5,5, 100,50);

        // le digo el color de relleno
        ctx.fillStyle = 'blue';

        // aplico el relleno
        ctx.fill();

        // muestro el contorno del rectangulo
        ctx.stroke();
        
ctx.closePath();