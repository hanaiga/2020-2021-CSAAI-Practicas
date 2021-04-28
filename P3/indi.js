console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");


// el tamaño del canvas 
canvas.width = 400;
canvas.height = 600;

const ctx = canvas.getContext("2d");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const izda = document.getElementById("izda");
const dcha = document.getElementById("dcha");


let x = 190;
// la y la pongo a 100 para que no rebote por encima del texto de vida o puntos
let y = 550;

// defino la velicidad en direccion x
let velx = 0;
let vely = 0;
let x2 = 150;

// control de los botones

start.onclick = () => {
     velx = 3;
     vely = 1;
}
stop.onclick = () => {
    velx = 0;
    vely = 0;
}

// cada vez que le doy a la tecla izda o dcha se me mueve el rectangulo 5 
// la delimito para que no salga del cuadro de juego

// tecla para ir a la Izda
window.onkeydown = (e) => {
    switch (e.keyCode){
        case 37:
            if (x2 <0){
                x2 = x2 + 5;
            } else{
                x2 = x2 - 5;
            }
            break;
        case 39:
            if (x2 <= canvas.width - 80){
                x2 = x2 + 5;
            } else{
                x2 = x2 - 5;
            }
    }
}

window.onkeyup = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39){
        x2 = x2;
    }
}

/*                movimiento usando botones 
izda.onclick = () =>{
    if (x2 <0){
        x2 = x2 + 5;
    } else{
        x2 = x2 - 5;
    }
}

dcha.onclick = () => {
    if (x2 <= canvas.width - 80){
        x2 = x2 + 5;
    } else{
        x2 = x2 - 5;
    }

}
*/ 


// esta es la funcion principal para animar
function update(){

    // ahora quiero que se mueva entonces defino el movimiento
    // para que no se salga del canvas y rebote
    // le resto el tamaño del rectangulo para que no se vea como el rec sale
    if (x <0 || x >= canvas.width - 20 ){
        velx = -velx;
    }
    if (y <= 70 || y > canvas.height - 50){
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
  
     // dibujo la raqueta
     ctx.beginPath();

     // le digo que dibuje un rectangulo en la coordenada 5,5 y de 100 *50
     ctx.rect(x2,570, 80,15);

         // le digo el color de relleno
         ctx.fillStyle = 'black';

         // aplico el relleno
         ctx.fill();

         // muestro el contorno del rectangulo
         ctx.stroke();
         
    ctx.closePath();

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


