let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timer = null;
let lapCount = 1;

function updateDisplay(){

    let h = (hr < 10) ? "0" + hr : hr;
    let m = (min < 10) ? "0" + min : min;
    let s = (sec < 10) ? "0" + sec : sec;
    let milli = (ms < 10) ? "00" + ms : (ms < 100) ? "0" + ms : ms;

    document.getElementById("display").innerHTML =
    h + " : " + m + " : " + s + " : " + milli;
}

function stopwatch(){

    ms++;

    if(ms == 1000){
        ms = 0;
        sec++;
    }

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hr++;
    }

    updateDisplay();
}

document.getElementById("start").onclick = function(){

    clearInterval(timer);

    timer = setInterval(stopwatch, 1);

}

document.getElementById("pause").onclick = function(){

    clearInterval(timer);

}

document.getElementById("reset").onclick = function(){

    clearInterval(timer);

    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;

    lapCount = 1;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";

}

document.getElementById("lap").onclick = function(){

    let li = document.createElement("li");

    li.innerHTML = "Lap " + lapCount + " - " + document.getElementById("display").innerHTML;

    document.getElementById("laps").appendChild(li);

    lapCount++;

}

updateDisplay();