console.log("Ejecutando JS....")

// Obtenemos los  elementos del DOM
const canvas = document.getElementById('canvas');
const imgen = document.getElementById('foto')
const ctx = canvas.getContext('2d');

// funcion que nos devuelve la imagen una vez cargada 100%
imgen.onload = function () {

  // establecemos el canvas del tamaño de la imagen
  canvas.width = imgen.width;
  canvas.height = imgen.height;

  //dibujamos la imagen sobre el canvas
  ctx.drawImage(imgen, 0,0);

  // asi obtenemos los pixeles de la imagen, para ello le pasamos donde compienza la imag
  // osea en (0,0) y donde acaba, que es la anchura y altura canvas que hemos establecido antes
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Obtenemos un array con todos los píxeles de la imagen
  let data = imgData.data

    // ahora borramos la componente roja de la imagen
    for(let i= 0; i<data.length; i+=4){
        data[i] = 0; //canal rojo
      
        // si queremos quitar la roja y la verde y quedarnos solo con azul
        // activamos ambas data[i] y data[i+1] 
        // si queremos quitar la verde es data[i+1]
        // si queremos quitar la azul es data[i+2]
    }

    // actualizamos la imagen para que salga el pixel pintado
    ctx.putImageData(imgData, 0, 0);


};

console.log("END");