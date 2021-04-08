console.log("Ejecutando JS..");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");

//leo la imagen del html

var logo = document.getElementById("logo");

logo.onload = () => {
    // que enseñe la imag una vez que ya se ha cargado
    ctx.drawImage(logo, 15,18);
};
