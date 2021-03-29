
const toca = document.getElementById('toca')

const btn = document.getElementById('btn')

btn.onclick = () => {
    console.log('se ha tocado boton')

    toca.innerHTML = "!HAS TOCADO EL BOTON!"
}