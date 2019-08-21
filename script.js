let outputMins = document.getElementById("minutes");
let outputSec = document.getElementById('seconds');

let mins = 0;
let sec = 0;
let running = false;


function addThirtyMins() {
    if (running === false) {
        if (mins <= 120) {
            mins += 30;
            outputMins.innerHTML = `${mins}`;
        }
    }
}
function addFifteenMins() {
    if (running === false) {
        if (mins <= 45) {
            mins += 15;
            outputMins.innerHTML = `${mins}`;
        }
    }
}
function addFiveMins() {
    if (running === false) {
        if (mins <= 55) {
            mins += 5;
            if (mins < 10) {
                outputMins.innerHTML = `0${mins}`;
            }
            else {
                outputMins.innerHTML = `${mins}`;
            }
        }
    }
}
function addThirtySec() {
    if (running === false) {
        if (sec < 60 && mins < 60) {
            sec += 30;
            outputSec.innerHTML = `${sec}`;
        }
        if (sec == 60) {
            if (mins <= 59) {
                mins++
                sec = 0;
                outputSec.innerHTML = `0${sec}`;
                if (mins < 10) {
                    outputMins.innerHTML = `0${mins}`;
                }
                else {
                    outputMins.innerHTML = `${mins}`;
                }

            }
        }

    }
}

function start() {
    if (running == false) {
        running = true;
        decrement();
    }
}


function decrement() {
    if (running == true) {
        setInterval(() => {
            if (sec > 0 || mins > 0) {
                if (running == true) {
                    if (sec <= 0) {
                        if (mins >= 0) {
                            mins--;
                            if (mins < 10) {
                                outputMins.innerHTML = `0${mins}`;
                                sec = 60;
                            } else {
                                outputMins.innerHTML = `${mins}`;
                                sec = 60;
                            }
                        }
                    }
                    if (sec > 0) {
                        sec--;
                        if (sec < 10) {
                            outputSec.innerHTML = `0${sec}`;
                        }
                        else { outputSec.innerHTML = `${sec}`; }
                        if (sec <= 0 && mins <= 0) {
                            running = false;
                        }
                    }
                }
            }
        }, 1000)
    }
}