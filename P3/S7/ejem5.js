
console.log("Ejecutando JS...");

const display = document.getElementById("display");

// mostramos la info de la tecla pulsada
window.onkeydown = (e)=> {
  display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}`
}

// cuando se suelta la tecla se borra el párrafo
window.onkeyup = (e) => {
  display.innerHTML = ""
}