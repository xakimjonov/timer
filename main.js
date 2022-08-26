let timerInput = document.getElementById("timer")
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let recordBtn = document.getElementById("record");
let recordList = document.getElementById("record-list");

let timer = 0
let startTime;
let interval;

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

let startClicked = function () {
    if (interval) {
        return
    }
    startTime = new Date()
    interval = setInterval(function () {
        let now = new Date()
        console.log("now.getTime()", now.getTime())
        console.log("startTime.getTime()", startTime.getTime())
        let diff = now.getTime() - startTime.getTime();
        console.log("diff", diff);
        timer = parseInt(diff / 10);
        let ms = addLeadingZeros(timer % 100, 2);
        let s = addLeadingZeros(parseInt(timer / 100) % 60, 2);
        let m = addLeadingZeros(parseInt(timer / 6000), 2);
        timerInput.value = `${m}:${s}:${ms}`;
    }, 100)
}

let stopClicked = function () {
    clearInterval(interval)
    interval = null;
}

let resetClicked = function () {
    timer = 0;
    timerInput.value = "00:00:00";
    clearInterval(interval)
    interval = null;
    recordList.innerHTML = "";
}

let recordClicked = function () {
    let li = document.createElement("li");
    li.innerText = timerInput.value;
    recordList.appendChild(li);
}

startBtn.addEventListener("click", startClicked)
stopBtn.addEventListener("click", stopClicked)
resetBtn.addEventListener("click", resetClicked)
recordBtn.addEventListener("click", recordClicked)