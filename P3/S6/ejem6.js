// para escribir texto


console.log("Ejecutando Js...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");

// en este caso no hace falta poner ctx.beginPath();
// el texto rellenado
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow';
// defino el texto que quiero que aparezca y en que coordenadas



ctx.fillText("texto sólido", 50, 50);

// el texto por lineas
ctx.strokeStyle = 'red';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 100, 100);
