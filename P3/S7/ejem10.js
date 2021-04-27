console.log("Ejecutando JS...");

const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
    if(video.paused)
        video.play();
    else{
        video.pause();
    }
}

// hacer el video grande
big.onclick = () => {
    video.width = 500;
    video.height = 300;
} 

// hacer el video pequeño
small.onclick = () => {
    video.width = 300;
    video.height = 200;
}

time.onclick = () =>{
    video.currentTime = 2;
}