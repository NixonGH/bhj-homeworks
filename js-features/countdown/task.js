let seconds = 40;

function updateTimer() {
    document.getElementById('timer').textContent = seconds;
}

function startTimer() {
    const interval = setInterval(function () {
        seconds--;
        updateTimer();
        if (seconds <= 0) {
            clearInterval(interval);
            alert("Вы победили в конкурсе!");
        }
    }, 1000);
}

startTimer();