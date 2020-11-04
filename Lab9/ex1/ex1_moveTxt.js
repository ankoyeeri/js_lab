var jsTxt = document.getElementById("mvTxt");

jsTxt.onmousedown = function (e) {
    function drag(e) {
        jsTxt.style.top = e.clientY - jsTxt.offsetHeight / 2 + "px";
        jsTxt.style.left = e.clientX - jsTxt.offsetWidth / 2 + "px";
    }

    //  Передвигаем изображение
    document.onmousemove = function(e) {
        drag(e);
    };

    //  Отпускаем кнопку мыши для остановки передвижения изображения
    jsTxt.onmouseup = function() {
        document.onmousemove = null;
        jsTxt.onmouseup = null;
    };
}


