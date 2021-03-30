const btn1 = document.getElementById('btn1')

const btn2 = document.getElementById('btn2')

btn2.onclick = () => {
    console.log('se ha tocado boton')

    btn1.innerHTML = "2"
    
}
