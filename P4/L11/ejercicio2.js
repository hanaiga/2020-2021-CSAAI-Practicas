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

// funcion que nos devuelve la imagen una vez cargada 100%

imgen.onload = function () {

  // establecemos el canvas del tamaño de la imagen
  canvas.width = imgen.width;
  canvas.height = imgen.height;

  //dibujamos la imagen sobre el canvas
  ctx.drawImage(imgen, 0,0);
  console.log("imagen Cargada con éxito");
};


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

console.log("END");