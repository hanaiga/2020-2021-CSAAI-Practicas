// dibujar la esfera

console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");

ctx.beginPath();
    // dibujo la espefera
    // coordenadas, radio, angulo inicial, angulo final
    // los angulos son por si no queremos dibujar esfera entera
    ctx.arc(100, 50, 10, 0, 2 *Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidht = 3;
    ctx.fillStyle = 'yellow';

    ctx.stroke();
    ctx.fill();

ctx.closePath();