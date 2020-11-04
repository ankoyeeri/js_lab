var jsImg = document.getElementById("mvElem");

jsImg.onmousedown = function (e) {
    function drag(e) {
        jsImg.style.top = e.clientY - jsImg.offsetHeight / 2 + "px";
        jsImg.style.left = e.clientX - jsImg.offsetWidth / 2 + "px";
    }

    //  Передвигаем изображение
    document.onmousemove = function (e) {
        drag(e);
    }

    //  Отпускаем кнопку мыши для остановки передвижения изображения
    jsImg.onmouseup = function () {
        document.onmousemove = null;
        jsImg.onmouseup = null;
    }
}


