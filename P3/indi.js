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

const rebote_sound = new Audio('rebote.mp3');
const raqueta_sound = new Audio('raqueta.mp3');


let x = 200;
// la y la pongo a 100 para que no rebote por encima del texto de vida o puntos
let y = 550;

// defino la velicidad en direccion x
let velx = 0;
let vely = 0;
let x2 = 200-30;

stop.onclick = () => {
    velx = 0;
    vely = 0;
}

// creo el objeto ladrillo

const LADRILLO = {
    F: 5, //numero de filas de ladrillos
    C: 8, // numero de columnas 
    w: 35, // anchra del ladrillo
    h: 15, // altura del ladrillo
    padding: 10, // espacio al rededor de cada ladrillo
    visible: true // estado del ladrillo -- activo este caso
}

// creo array bidimensional inicialmente vacio de f filas y c columnas
const ladrillos = [];

// creo un bucle que va reccoriendo las finlas y columnas y asignando psiciones

// se recorren las filas y la variable i va a tomar los valores de 0 hasta F -1
for (let i =0; i < LADRILLO.F; i++){
    ladrillos[i] = [];  // inicializamos filas

    // recorremos las columnas de cada fila y desde 0 hasta c-1
    for (let j =0; j < LADRILLO.C; j++){

    // calculamos valores para los ladrillos 
    ladrillos[i][j] = {

        x: 25 + (LADRILLO.w + LADRILLO.padding) * j,
        y: 75 + (LADRILLO.h + LADRILLO.padding) * i,
        w: LADRILLO.w,
        h: LADRILLO.h,
        padding: LADRILLO.padding,
        visible: LADRILLO.visible

        };

    }
}

// cada vez que le doy a la tecla izda o dcha se me mueve el rectangulo 5 
// la delimito para que no salga del cuadro de juego

// tecla para ir a la Izda
window.onkeydown = (e) => {
    switch (e.keyCode){
        case 32:
            velx = 3;
            vely = 1; 
        case 37:
            if (x2 <0){
                x2 = x2 + 10;
            } else{
                x2 = x2 - 10;
            }
            break;
        case 39:
            if (x2 <= canvas.width - 80){
                x2 = x2 + 10;
            } else{
                x2 = x2 - 10;
            }
    }
}

window.onkeyup = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39){
        x2 = x2;
    }
}

// esta es la funcion principal para animar
function update(){

    // ahora quiero que se mueva entonces defino el movimiento
    // para que no se salga del canvas y rebote
    // le resto el tamaño de la pelota para que no se vea como el rec sale 

     // rebote con laterales
    if (x <0 || x >= canvas.width - 20 ){
        velx = -velx;
        rebote_sound.currentTime = 0;
        rebote_sound.play();
    }
     
    // rebote arriba
    if (y <= 70){
        vely = -vely;
        rebote_sound.currentTime = 0;
         rebote_sound.play();
    } 

    // rebote con raqueta
    if (((y >= 570) && (x == x2)) || ((y >= 570) && (x == (x2 + 10))) || ((y >=570) && (x == (x2-10)))){
        velx = -velx;
        vely = -vely;
        raqueta_sound.currentTime = 0;
        raqueta_sound.play();
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
     ctx.rect(x2,570, 60,10);

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

        ctx.arc(x, y, 7, 0, 2 *Math.PI);
        ctx.strokeStyle = 'lightblue';
        ctx.lineWidht = 3;
        ctx.fillStyle = 'black';

        ctx.stroke();
        ctx.fill();

    ctx.closePath();

    
    // Dibujar los ladrillos

    for (let i =0; i< LADRILLO.F; i++){
        for (let j=0; j< LADRILLO.C; j++){
            // le digo que si el ladrillo es visible se pinta
            if (ladrillos[i][j].visible){
                ctx.beginPath();
                    ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
                    ctx.fillStyle = 'lightblue'
                    ctx.fill();
                ctx.closePath();
            }
        }
    }
   
    // que vuelva a ejecutar update cuando le toque
    requestAnimationFrame(update);
}



update();