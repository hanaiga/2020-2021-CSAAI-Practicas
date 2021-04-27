
// el boton normal

const button = document.getElementById("button");
const button_test = document.getElementById("button-test");


// el boton de check

const c1 = document.getElementById("checkbox1");
const c2 = document.getElementById("checkbox2");
const c1_test = document.getElementById("c1_test");
const c2_test = document.getElementById("c2_test");

// botones radio

const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const r_display = document.getElementById("radio_display");


// funcion para el boton normal 

button.onclick = () => {
    //-- Cambiar de color el texto
    if (button_test.style.color == "") {
        button_test.style.color = "green";
    } else {
        button_test.style.color = "";
    }
}

// funcion para los botones de caja 
c1.onchange = () => {
    if(c1.checked){
        c1_test.style.color = "red";
    }else {
        c1_test.style.color = "";
    }
}

c2.onchange = () => {
    if(c2.checked){
        c2_test.style.color = "red";
    }else {
        c2_test.style.color = "";
    }
}

// funcion para los botones de radio

r1.onchange = () =>{
    r_display.innerHTML = "seleccionado b1";
}

r2.onchange = () =>{
    r_display.innerHTML = "seleccionado b2";
}

r3.onchange = () =>{
    r_display.innerHTML = "seleccionado b3";
}

r4.onchange = () =>{
    r_display.innerHTML = "seleccionado b4";
}