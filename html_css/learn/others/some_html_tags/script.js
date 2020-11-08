document.addEventListener("DOMContentLoaded", () => {
    let
        progress = 0,
        incrementSpeed = 1,
        progressBar = document.getElementById('bar'), //id do progress
        progressInterval = setInterval(() => {
            progress += incrementSpeed;
            progressBar.value = progress;

            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 100); //funcao sera executada a cada 100ms

});