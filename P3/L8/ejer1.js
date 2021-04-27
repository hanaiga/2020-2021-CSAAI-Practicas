console.log("Ejecutando js...");

const canvas = document.getElementById("canvas");

// el tamaño del canvas 
 canvas.width = 400;
 canvas.height = 600;

const ctx = canvas.getContext("2d");

// dibujado la pelota
 

ctx.beginPath();
    // dibujo la espefera
    // coordenadas, radio, angulo inicial, angulo final
    // los angulos son por si no queremos dibujar esfera entera
    ctx.arc(200, 500, 10, 0, 2 *Math.PI);
    ctx.strokeStyle = 'lightblue';
    ctx.lineWidht = 3;
    ctx.fillStyle = 'black';

    ctx.stroke();
    ctx.fill();

ctx.closePath();

// vidas
ctx.strokeStyle = 'red';
ctx.font = "15px Arial";
ctx.strokeText("VIDAS: 3", 320, 50);

//puntos

ctx.font = "20px Arial";
ctx.strokeStyle = 'yellow';
ctx.strokeText("PUNTOS TOTALES: 0000", 20, 50);

