
var intervChange = document.getElementById("interval")



function onInterval() {

    intervChange.innerHTML = 1 + Number(intervChange.innerHTML)
}

setInterval(onInterval, 700);