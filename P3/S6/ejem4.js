console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");

ctx.beginPath();
    //para dibujar lineas se usa moveTo() que lo que hace es levantar el lapiz y posicionarse en esas coordenadas
    // line to, empieza a dibujar desde donde hemos dejado move tu, osea el lapiz, hasta las coordenadas que le digamos

    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);

    // se pueden hacer varias lineas en el mismo canvas
    // ahora dibujamos una vertical y horizontal unidas
    ctx.moveTo(10, 80);
    ctx.lineTo(150, 80);
    ctx.lineTo(150, 20);

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 4;

    ctx.stroke();

ctx.closePath()