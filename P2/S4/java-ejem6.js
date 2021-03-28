// funcion que captura un click

function click(){

    console.log('este mensaje sale cada vez que se clicke el parrafo')
}

console.log('Ejecutando js...')

const prueba = document.getElementById('prueba')

prueba.onclick = click;