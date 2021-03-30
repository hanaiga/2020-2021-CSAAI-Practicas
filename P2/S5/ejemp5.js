
const gui = {
    display1: document.getElementById("display1"),
    boton_inc1: document.getElementById("boton_inc1"),
    boton_dec1: document.getElementById("boton_dec1"),

    display2: document.getElementById("display2"),
    boton_inc2: document.getElementById("boton_inc2"),
    boton_dec2: document.getElementById("boton_dec2")
}

// le pasamos como parametro el display, que es donde se van a hacer las operaciones

function counter(display){
    this.valor = 0;

    // almaceno el display
    this.display = display;

    // actualizo el contador y lo muestro en display
    this.inc = (value) => {
        this.valor += value;
        this,display.innerHTML = this.valor;
    }
}
 // creo los objetos contadores
const c1 = new counter(gui.display1);
const c2 = new counter(gui.display2);

gui.boton_inc1.onclick = () =>{
    counter.inc(1)
}

gui.boton_dec1.onclick = () =>{
    counter.inc(-1)
}
gui.boton_inc2.onclick = () =>{
    counter.inc(1)
}

gui.boton_dec2.onclick = () =>{
    counter.inc(-1)
}