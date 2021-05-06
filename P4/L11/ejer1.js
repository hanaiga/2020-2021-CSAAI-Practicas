console.log("Ejecutando Js..");

const canvas = document.getElementById("canvas");
const imagen = document.getElementById("foto");
const ctx = canvas.getContext("2d");


// usamos la fucnion de retrollamada, solo podemos acceder a la imag
// una vez este totalmente cargada

imagen.onload = () => {
    console.log("imagen totalmente cargada");

    // establecemos tamaño del canvas al tamaño de la imagen
    canvas.width = imagen.width;
    canvas.height = imagen.height;

    // ahora dibujamos la imagen en el canvas
    ctx.drawImage(imagen, 0,0);
};

console.log("END");