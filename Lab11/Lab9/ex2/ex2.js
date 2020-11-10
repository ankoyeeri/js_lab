var element = document.getElementById("jsImg");

element.onclick = function () {
    let num = 0

    function move(){
        num += 1;
        element.style.paddingLeft = num + "px";
        
        if(num == 300){
            clearInterval(interval);
        }
    }

    var interval = setInterval(move, 1);
}