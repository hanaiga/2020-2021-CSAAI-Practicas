console.log("Ejecutando JS....")

// Obtenemos los  elementos del DOM
const canvas = document.getElementById('canvas');
const imgen = document.getElementById('foto');
const ctx = canvas.getContext('2d');

const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');
const rango_R = document.getElementById('rango_R');
const rango_G = document.getElementById('rango_G');
const rango_B = document.getElementById('rango_B');

const grises = document.getElementById('grises');
const colores = document.getElementById('colores');
const negativo = document.getElementById('negativo');
const display = document.getElementById("display");
const duplicado = document.getElementById('duplicado');
const ruido = document.getElementById('Ruido');

var duplex = false;
// funcion que nos devuelve la imagen una vez cargada 100%

display.innerHTML = 'Pulsa uno de los botones para ver el efecto en la imagen';

imgen.onload = function () {

  // establecemos el canvas del tamaño de la imagen
  canvas.width = imgen.width;
  canvas.height = imgen.height;

  //dibujamos la imagen sobre el canvas
  ctx.drawImage(imgen, 0,0);
  console.log("imagen Cargada con éxito");
};

function filter_colores(){
    
    // establecemos funcion retrollamada del deslizador rojo
    deslizador_R.oninput = () => {

        rango_R.innerHTML = deslizador_R.value;

        //situamos la imagen original en el canvas
        ctx.drawImage(imgen, 0,0);

        // dibujamos la nueva imagen en el canvas
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Obtenemos un array con todos los píxeles de la imagen
        let data = imgData.data

        // obtenemos umbral de los deslizadores
        let umbral_R = deslizador_R.value;
        let umbral_G = deslizador_G.value;
        let umbral_B = deslizador_B.value;

        // vamos borrando componentes segun umbrales
        for(let i= 0; i<data.length; i+=4){
            if (data[i] > umbral_R){
                data[i] = umbral_R;
            }
            if (data[i+1] > umbral_G){
                data[i+1] = umbral_G;
            }
            if (data[i+2] > umbral_B){
                data[i+2] = umbral_B;
            }    
        }
        // actualizamos la imagen 
        ctx.putImageData(imgData, 0, 0);

    };

    // funcion retrollamada del deslizador verde
    deslizador_G.oninput = () => {

        rango_G.innerHTML = deslizador_G.value;
        //situamos la imagen original en el canvas
        ctx.drawImage(imgen, 0,0);

        // dibujamos la nueva imagen en el canvas
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Obtenemos un array con todos los píxeles de la imagen
        let data = imgData.data

        // obtenemos umbral del deslizador
        let umbral_R = deslizador_R.value;
        let umbral_G = deslizador_G.value;
        let umbral_B = deslizador_B.value;

        // ahora borramos la componente roja de la imagen
        for(let i= 0; i<data.length; i+=4){
            if (data[i] > umbral_R){
                data[i] = umbral_R;
            }
            if (data[i+1] > umbral_G){
                data[i+1] = umbral_G;
            }
            if (data[i+2] > umbral_B){
                data[i+2] = umbral_B;
            }    
        }


        // actualizamos la imagen para que salga el pixel pintado
        ctx.putImageData(imgData, 0, 0);


    };

    // funcion retrollamada del deslizador azul
    deslizador_B.oninput = () => {

        rango_B.innerHTML = deslizador_B.value;
        //situamos la imagen original en el canvas
        ctx.drawImage(imgen, 0,0);

        // dibujamos la nueva imagen en el canvas
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Obtenemos un array con todos los píxeles de la imagen
        let data = imgData.data

        // obtenemos umbral del deslizador
        let umbral_R = deslizador_R.value;
        let umbral_G = deslizador_G.value;
        let umbral_B = deslizador_B.value;

        // ahora borramos la componente roja de la imagen
        for(let i= 0; i<data.length; i+=4){
            if (data[i] > umbral_R){
                data[i] = umbral_R;
            }
            if (data[i+1] > umbral_G){
                data[i+1] = umbral_G;
            }
            if (data[i+2] > umbral_B){
                data[i+2] = umbral_B;
            }    
        }

        // actualizamos la imagen para que salga el pixel pintado
        ctx.putImageData(imgData, 0, 0);


    };
}

// filto de conversion de la imagen en grises
function filter_grises(){
    // dibujamos la imagen original en el canvas 
    ctx.drawImage(imgen, 0,0);
    // dibujamos la nueva imagen en el canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //obtenemos array con todos los pixeles de la imagen
    let data = imgData.data;

    // caluclo la intensidad de cada pixel y se la paso a cada componente
    for(let i= 0; i<data.length; i+=4){
        rojo = data[i];
        verde = data[i+1];
        azul = data[i+2];
        // calculo el brillo usando esta ecuacion
        brillo = (3 * rojo + 4 * verde + azul)/8;
        //ahora le dijo que brillo o nivel de gris va a tener cada componente
        data[i] = brillo;
        data[i+1] = brillo;
        data[i+2] = brillo;
    }
        // actualizamos la imagen para que salgan los nuevos pixeles
        ctx.putImageData(imgData, 0, 0);
}

// funcion negativo
function filter_negativo(){
    ctx.drawImage(imgen, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;

    // examinamos pixele sy hacemos negativo, restandole al 255 el valor de cada componente
    for( let i = 0; i<data.length; i+=4){
        rojo = data[i];
        verde = data[i+1];
        azul = data[i+2];

        // le digo ahora que va a valer cada pixel
        data[i] = 255 - rojo;
        data[i+1] = 255 - verde;
        data[i+2] = 255 - azul;
    }
    //actualizo la imagen
    ctx.putImageData(imgData, 0,0);
}

// filtro de reflejo_espejo
function filter_duplicado(){
    ctx.drawImage(imgen, 0,0);
    ctx.translate(canvas.width,0);
    ctx.scale(-1,1);
    ctx.drawImage(imgen, 0,0);
    duplex = true;
}

function filter_ruido(){
    ctx.drawImage(imgen, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    for( let i = 0; i<data.length; i+=4){
        let rand = (Math.random() * 250);
        data[i] = data[i] + rand;
        data[i+1] = data[i+1] + rand;
        data[i+2] = data[i+2] + rand;
    }
        //actualizo la imagen
        ctx.putImageData(imgData, 0,0);
}
// Depende de que boton se pulsa, se llama a la opcion elegida
colores.onclick = () =>{
    // vuelvo a dibujar la imagen original, por si acaso se selecciona antes el gris que vuelva a tener
    // color para que se usen los deslizadores
    ctx.drawImage(imgen, 0,0);
    deslizador_R.value = 255;
    deslizador_G.value = 255;
    deslizador_B.value = 255;
    filter_colores();
    display.innerHTML = '!! Arrastra los selectores de cada componente para ver la diferencia de color !!';
    if (duplex == true){
        document.location.reload();
    }
}

grises.onclick = () =>{
    // vulevo a usar la imagen original no modificada por algun filtro
    ctx.drawImage(imgen, 0,0);
    display.innerHTML = '!! Este es el resultado de la imagen con el filtro de grises !!';
    filter_grises();
    if (duplex == true){
        document.location.reload();
    }
}

negativo.onclick = () =>{
    // vulevo a usar la imagen original no modificada por algun filtro
    ctx.drawImage(imgen, 0,0);
    display.innerHTML = '!! Este es el resultado de la imagen con el filtro negativo !!';
    filter_negativo();
    if (duplex == true){
        document.location.reload();
    }
}

duplicado.onclick = () =>{
    ctx.drawImage(imgen, 0,0);
    filter_duplicado();
    display.innerHTML = '!! Este es el resultado de duplicar la imagen !!';
}

ruido.onclick = () =>{
    ctx.drawImage(imgen, 0,0);
    filter_ruido();
    if (duplex == true){
        document.location.reload();
    }
    display.innerHTML = '!! Este es el resultado de la imagen con ruido !!';
}
console.log("END");