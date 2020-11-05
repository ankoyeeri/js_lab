// var canvas = document.getElementById('canvas');
function fun1() {
    let ctx = canvas.getContext('2d');
    for (i = -15; i < 15; i += 0.01) {
        ctx.fillStyle = document.forms["data"].select.value;
        //              x               y               w   h
        ctx.fillRect(250 + i * 10, 300 - Math.pow(i, 2), 1, 2);
    }
}

function fun2(){
    let ctx = canvas.getContext("2d");
    for (i = -15; i < 15; i += 0.01) {
        ctx.fillStyle = document.forms["data"].select.value;
        ctx.fillRect(250 + i * 10, 300 - Math.pow(i, 3), 1, 2);
    }
}

function fun3(){
    let ctx = canvas.getContext("2d");
    for (i = -15; i < 15; i += 0.01) {
        ctx.fillStyle = document.forms["data"].select.value;
        ctx.fillRect(250 + i * 10, 300 - Math.sin(i) * 100, 1, 2);
    }   
}

function fun4(){
    let ctx = canvas.getContext("2d");
    for (i = -15; i < 15; i += 0.01) {
        ctx.fillStyle = document.forms["data"].select.value;
        ctx.fillRect(250 + i * 10, 300 - Math.cos(i) * 100, 1, 2);
    }   
}