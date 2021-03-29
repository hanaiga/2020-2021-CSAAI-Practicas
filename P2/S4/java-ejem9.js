const prueba1 = document.getElementById('prueba1')

const purba2 = document.getElementById('prueba2')

prueba2.onclick = () => {

    console.log("se ha hecho click sobre el parrafo 2")

    prueba1.innerHTML = "Se ha cambiado el texto"
}