console.log("Ejecutando JS...");

display = document.getElementById("display");
igual = document.getElementById("igual");
reset = document.getElementById("reset");
delet = document.getElementById("delet");
coma = document.getElementById("coma");

// ahora recojer un array con todos los digitos

let botones = document.getElementsByClassName("boton");

// Ahora un array con todas las operaciones

let oper = document.getElementsByClassName("oper");

// hago esto para que no aparezca el tipico 0y a lado el primer digito 
// pulsado, ejem 03*4 -- quiero evitar el 0 del pricipio
const ESTADO ={
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2_INIT: 3,
    OP2:4
};

// variable inciar estado

let estado = ESTADO.INIT;

// bucle para leer cada boton que se pulse
for (i=0; i<botones.length; i++){
    botones[i].onclick=(ev)=>{
        botonn(ev.target.value);
    }
}

// bucle para leer cada operacion

for (i=0; i<oper.length; i++){
    oper[i].onclick=(ev)=>{
        operacion(ev.target.value);
    }
}

// si hubiera una coma

coma.onclick = () =>{
    if(estado==ESTADO.OP1 || estado == ESTADO.OP2_INIT || estado == ESTADO.INIT){
        display.innerHTML += coma.innerHTML;
        estado = ESTADO.OPERATION;
    }
}

//Evaluar expresion

igual.onclick = () =>{
    display.innerHTML = eval(display.innerHTML);
}

// borrar todo Ac
reset.onclick = () =>{
    display.innerHTML = "0";
    estado = ESTADO.INIT;
}

// borrar un digito

delet.onclick = () =>{
    if((display.innerHTML == "0") || (display.innerHTML == '')){
        estado = ESTADO.INIT;
    }else{
        display.innerHTML = display.innerHTML.slice(0,-1);
    }
}

// comprobar estado de los botones

function botonn(btn){

    if(estado == ESTADO.INIT){
        display.innerHTML = btn;
        estado = ESTADO.OP1;
    }else if(estado == ESTADO.OP1){
        display.innerHTML += btn;
    }else if(estado == ESTADO.OPERATION){
        display.innerHTML += btn;
        estado = estado.OP2_INIT;
    }else if(estado == ESTADO.OP2_INIT){
        display.innerHTML += btn;
        estado = ESTADO.OP2;
    }else if(estado == ESTADO.OP2){
        display.innerHTML += btn;
    }

}
function operacion(oper){
    if (estado != ESTADO.OPERATION){
        display.innerHTML += oper;
        estado = ESTADO.OPERATION
    }
}