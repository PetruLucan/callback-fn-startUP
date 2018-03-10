function log(a) {
    console.log(a);
}

var bttn = document.getElementById("btn");
var intChange = document.getElementById("interval")
var rstBttn = document.getElementById("rstBtn")

bttn.addEventListener("click", change);
rstBttn.addEventListener("click", reset);

var intervalID = -1;
function change() {

    if (intervalID == -1) {
        bttn.innerHTML = "Stop"
        function onInterval() {
            intChange.innerHTML = 1 + Number(intChange.innerHTML)
        }
        intervalID = setInterval(onInterval, 1000)
    }
    else {
        clearInterval(intervalID)
        bttn.innerHTML = "Start!"
        intervalID = -1
    }
}

function reset(){
    intChange.innerHTML="Start"
    
    clearInterval(intervalID)
}


//bttn.classList.toggle("btn");
//if (bttn.innerHTML === "Stop") {
// bttn.innerHTML = "Start"
// } else bttn.innerHTML = "Stop"
//}

function clearDelay(a) {
    clearTimeout(a)
}

function clear(a) {
    clearInterval(a)
}

