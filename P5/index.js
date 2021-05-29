
// Obtenemos los elementos del video
let directo = document.getElementById('directo');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const btn_video1 = document.getElementById('btn_video1');
const btn_video2 = document.getElementById('btn_video2');
const btn_video3 = document.getElementById('btn_video3');
const btn_test = document.getElementById('btn_test');
const btn_on = document.getElementById('btn_src_on');
const btn_off = document.getElementById('btn_src_off');

// establecemos el tamaño o dimension de los videos
directo.width = 420;
directo.height = 220;
video1.width = 200;
video1.height = 100;
video2.width = 200;
video2.height = 100;
video3.width = 200;
video3.height = 100;

let Estado = 0;

// obtenemos la imagen test usada
const test_imagen = "test.jpg";

// la imagen que se va a mostrar cuando no haya arrancado el video
directo.poster = test_imagen;
video1.poster = test_imagen;
video2.poster = test_imagen;
video3.poster = test_imagen;

// poner en marcha un video al tocar el boton on 
btn_on.onclick = () =>{
    //cargar el video a usar
    video1.src="https://github.com/hanaiga/videos/raw/main/erizo.mp4";
    video2.src="https://github.com/hanaiga/videos/raw/main/lemon.mp4";
    video3.src="https://github.com/hanaiga/videos/raw/main/egipto.mp4";

    // resproducir el video desde cero
    video1.currentTime = 0;
    video1.play();

    video2.currentTime = 0;
    video2.play();

    video3.currentTime = 0;
    video3.play();

    // silenciamos los videos
    video1.muted = true;
    video2.muted = true;
    video3.muted = true;

    Estado = 1;
};

// parar los videos
btn_off.onclick = () =>{
    video1.src=" ";
    video2.src=" ";
    video3.src=" ";
    directo.src = '';
    Estado = 0;
}

// el primer video
btn_video1.onclick = () =>{
    if(Estado == 1){
        directo.src= video1.src;
        directo.play();
    }
}

// el segundo video
btn_video2.onclick = () =>{
    if(Estado == 1){
        directo.src= video2.src;
        directo.play();
    }

}

// el tercer video
btn_video3.onclick = () =>{
    if(Estado == 1){
        directo.src= video3.src;
        directo.play();
    }
}

// señal test
btn_test.onclick = () =>{
    if(Estado == 1){
    directo.src = '';
}
}


