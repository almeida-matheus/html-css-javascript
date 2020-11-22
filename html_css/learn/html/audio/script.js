let song = document.getElementById("song");
let timer = document.getElementById("timer");
let container_timer = document.getElementById("container_timer");
let go = document.getElementById("play");
let wait = document.getElementById("pause");

function play() {
    song.play();
    container_timer.style.display = "block";
    go.style.display = "none";
    wait.style.display = "inline-block";
}

function pause() {
    song.pause();
    togglePlayPause();
}

function stop() {
    song.pause();
    song.currentTime = 0;
    container_timer.style.display = "none";
    togglePlayPause();

}

function togglePlayPause() {
    go.style.display = "inline-block";
    wait.style.display = "none";
}

function backward() {
    song.currentTime -= 15;
}

function forward() {
    song.currentTime += 15;
    // container_timer.style.display = "block";
}

function slowDown() {
    song.playbackRate -= 0.1;
}

function speedUp() {
    song.playbackRate += 0.1;
}
/*ontimeupdate: executa a função quando a posição de reprodução for alterada*/
song.ontimeupdate = function () {
    timerValue();

    if (song.ended == true) {
        stop();
    }
}

function timerValue() {
    timer.innerHTML = Math.floor(song.currentTime);
}
