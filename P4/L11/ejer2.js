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

  //obtenemos el numero total de elementos que hay en el array
  console.log("Tamaño de data: " + data.length)

  //-- El número total de pixeles es la altura por la anchura
  pixeles = canvas.width * canvas.height
  console.log("Pixeles totales: " + pixeles)

};

console.log("END");