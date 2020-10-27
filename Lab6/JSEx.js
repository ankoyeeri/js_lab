//  Открыть первое окно
function openWindow1(){
    win1 = open("","win1", "width=300,height=300");
}


function openWindow2(){
    win2 = open("","win2", "");
}

function closeWindow1(){
    try{
        win1.close();
    }
    catch(err){
        alert(err);
    }
}

function closeWindow2(){
    try{
        win2.close();
    }
    catch(err){
        alert(err);
    }
}

function writeRandText1(){
    win1.document.write("<p>");
    win1.document.write("Название окна: " + win1.window.name + "<br>");
    win1.document.write("Образец текста");
    win1.document.write("</p>");
}

function writeRandText2(){
    win2.document.write("<p>");
    win2.document.write("Название окна: " + win2.window.name + "<br>");
    win2.document.write("Образец текста");
    win2.document.write("</p>");
}

//-------------------------