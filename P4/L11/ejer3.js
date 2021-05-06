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

    // ahora pintar un pixel de un color 
    // obtenemos la posicion del pixel a pintar

    let i = 25 + 25*canvas.width;

    // las componentes que no interean las ponemos a cer las que si a 255
    data[i*4] = 0; // color rojo
    data[i*4 + 1] = 0; // color verde
    data[i*4 + 2] =255; // color azul
    
    // actualizamos la imagen para que salga el pixel pintado
    ctx.putImageData(imgData, 0, 0);


};

console.log("END");