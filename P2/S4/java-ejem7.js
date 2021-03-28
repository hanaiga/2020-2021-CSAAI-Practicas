// metemos la funcion directamente en en el click
console.log('Ejecutando js ...')

const prueba = document.getElementById('prueba')

prueba.onclick = function() {
    console.log('se ha hecho click sobre el parrafo')
}