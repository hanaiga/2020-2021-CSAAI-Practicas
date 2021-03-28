// metemos la funcion directamente en en el click

console.log('Ejecutando js...')

const prueba = document.getElementById('prueba')

prueba.onclick = function (){

    console.log('este mensaje sale cada vez que se clicke el parrafo')
}
