var element = document.getElementById("jsImg");

element.onclick = function () {
    let x = 1;
    let atTheEnd = false;

    function move() {

        yID = 100 + Math.sin(x * 0.03) * 50 + "px"

        if (x < 560 && !atTheEnd) {
            atTheEnd = false;

            xID = x + 20 + "px"


            element.style.left = xID;
            element.style.top = yID;
            x += 5;
        }
        if (x > -0 && atTheEnd) {

            xID = x + "px"

            element.style.left = xID;
            element.style.top = yID;
            x -= 5;
        }
        if (x > 560) {
            atTheEnd = true
        }
        if(x <= 0){
            atTheEnd = false; // Чтобы прервать цикл закомментить
        }
    }

    setInterval(move, 10);
}