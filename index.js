var timer = 60;
var score = 0;
var hitrn = 0;
var generator = "";

function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function makeBubble() {
    generator = "";
    for (i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        generator += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = generator;
}

function runTimer() {
    var timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector('#timervalue').textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
            hitrn = 0; // Reset hitrn to 0
            document.querySelector("#hitbubble").textContent = hitrn; // Update hitbubble
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitbubble").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

function initializeGame() {
    score = 0;
    document.querySelector("#scorevalue").textContent = score;
    timer = 60;
    document.querySelector('#timervalue').textContent = timer;
    makeBubble();
    getNewHit();
    runTimer();
}

initializeGame();
