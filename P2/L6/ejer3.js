console.log("Ejecutando JS...");

display = document.getElementById("display");
boton1 = document.getElementById("boton1");
boton2 = document.getElementById("boton2");
suma = document.getElementById("suma");
igual = document.getElementById("igual");
clear = document.getElementById("clear");


// la funcion ev se queda con lo que se haya pulsado en el boton

boton1.onclick = (ev) =>{
    display.innerHTML += ev.target.value;
}
boton2.onclick = () =>{
    display.innerHTML += ev.target.value;
}

suma.onclick = () =>{
    display.innerHTML += ev.target.value;
}

igual.onclick = () =>{
    display.innerHTML = eval(display.innerHTML);
}

clear.onclick = () =>{
    display.innerHTML = "0";
}