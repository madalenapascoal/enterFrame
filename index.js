var px, py, dx, dy, vel, tmp, obj;

function iniciar() {
    px = 0;
    py = 0;
    dx = 0;
    dy = 0;
    vel = 1;
    tmp = setInterval(enterFrame, 1);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    obj = document.getElementById("dv1");
}

function keyDown() {
    var tecla = event.keyCode;
    if (tecla == 37) {
        dx = -1;
    }
    if (tecla == 38) {
        dy = -1;
    }
    if (tecla == 39) {
        dx = 1;
    }
    if (tecla == 40) {
        dy = 1;
    }
}

function keyUp() {
    var tecla = event.keyCode;
    if (tecla == 37) {
        dx = 0;
    }
    if (tecla == 38) {
        dy = 0;
    }
    if (tecla == 39) {
        dx = 0;
    }
    if (tecla == 40) {
        dy = 0;
    }
}

function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px";
}



window.addEventListener("load", iniciar);