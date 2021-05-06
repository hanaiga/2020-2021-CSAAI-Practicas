console.log("Ejecutando JS....")

// Obtenemos los  elementos del DOM
const canvas = document.getElementById('canvas');
const imgen = document.getElementById('foto');
const ctx = canvas.getContext('2d');
const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');
const rango = document.getElementById('rango');

// funcion que nos devuelve la imagen una vez cargada 100%
imgen.onload = function () {

  // establecemos el canvas del tamaño de la imagen
  canvas.width = imgen.width;
  canvas.height = imgen.height;

  //dibujamos la imagen sobre el canvas
  ctx.drawImage(imgen, 0,0);
  console.log("imagen Cargada con éxito");
};

// establecemos funcion retrollamada del deslizador
deslizador_R.oninput = () => {

    //situamos la imagen original en el canvas
    ctx.drawImage(imgen, 0,0);

    // dibujamos la nueva imagen en el canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Obtenemos un array con todos los píxeles de la imagen
    let data = imgData.data

    // obtenemos umbral del deslizador
    umbral = deslizador_R.value;

    // ahora borramos la componente roja de la imagen
    for(let i= 0; i<data.length; i+=4){
        if (data[i] > umbral)
         data[i] = umbral;
      
        // si queremos quitar la roja y la verde y quedarnos solo con azul
        // activamos ambas data[i] y data[i+1] 
        // si queremos quitar la verde es data[i+1]
        // si queremos quitar la azul es data[i+2]
    }

    // actualizamos la imagen para que salga el pixel pintado
    ctx.putImageData(imgData, 0, 0);


};
deslizador_G.oninput = () => {

    //situamos la imagen original en el canvas
    ctx.drawImage(imgen, 0,0);

    // dibujamos la nueva imagen en el canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Obtenemos un array con todos los píxeles de la imagen
    let data = imgData.data

    // obtenemos umbral del deslizador
    umbral = deslizador_G.value;

    // ahora borramos la componente roja de la imagen
    for(let i= 0; i<data.length; i+=4){
        if (data[i] > umbral)
         data[i+1] = umbral;
      
        // si queremos quitar la roja y la verde y quedarnos solo con azul
        // activamos ambas data[i] y data[i+1] 
        // si queremos quitar la verde es data[i+1]
        // si queremos quitar la azul es data[i+2]
    }

    // actualizamos la imagen para que salga el pixel pintado
    ctx.putImageData(imgData, 0, 0);


};
deslizador_B.oninput = () => {

    //situamos la imagen original en el canvas
    ctx.drawImage(imgen, 0,0);

    // dibujamos la nueva imagen en el canvas
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Obtenemos un array con todos los píxeles de la imagen
    let data = imgData.data

    // obtenemos umbral del deslizador
    umbral = deslizador_B.value;

    // ahora borramos la componente roja de la imagen
    for(let i= 0; i<data.length; i+=4){
        if (data[i] > umbral)
         data[i+2] = umbral;
      
        // si queremos quitar la roja y la verde y quedarnos solo con azul
        // activamos ambas data[i] y data[i+1] 
        // si queremos quitar la verde es data[i+1]
        // si queremos quitar la azul es data[i+2]
    }

    // actualizamos la imagen para que salga el pixel pintado
    ctx.putImageData(imgData, 0, 0);


};

console.log("END");