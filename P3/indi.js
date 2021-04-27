console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");

// el tamaño del canvas 
canvas.width = 400;
canvas.height = 600;

const ctx = canvas.getContext("2d");

// funcion para que se mueva el coso


let x = 0;
// la y la pongo a 100 para que no rebote por encima del texto de vida o puntos
let y = 100;

// defino la velicidad en direccion x
let velx = 3;
let vely = 1;




// esta es la funcion principal para animar
function update(){

    console.log("test");
    // ahora quiero que se mueva entonces defino el movimiento
    // para que no se salga del canvas y rebote
    // le resto el tamaño del rectangulo para que no se vea como el rec sale
    if (x <0 || x >= canvas.width - 20 ){
        velx = -velx;
    }
    if (y <= 70 || y > canvas.height - 20){
        vely = -vely;
    }
    x = x + velx;
    y = y + vely;
    // borro canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        // vidas
    ctx.strokeStyle = 'red';
    ctx.font = "15px Arial";
    ctx.strokeText("VIDAS: 3", 320, 50);

        //puntos

    ctx.font = "20px Arial";
    ctx.strokeStyle = 'yellow';
    ctx.strokeText("PUNTOS TOTALES: 0000", 20, 50);
    // dibujo los elementos
    ctx.beginPath();
    
    // dibujo la espefera
    // coordenadas, radio, angulo inicial, angulo final

        ctx.arc(x, y, 10, 0, 2 *Math.PI);
        ctx.strokeStyle = 'lightblue';
        ctx.lineWidht = 3;
        ctx.fillStyle = 'black';

        ctx.stroke();
        ctx.fill();

    ctx.closePath();
    // que vuelva a ejecutar update cuando le toque
    requestAnimationFrame(update);
}

// llamo a la funion para que empieze a rular
update();