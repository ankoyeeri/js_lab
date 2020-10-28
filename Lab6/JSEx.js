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

function ex2(){
    document.write("<table border=1>");
    document.write("<tr><td>Свойство</td> <td>Значение</td></tr>");
    document.write("<tr><td>Браузер пользователя<br>window.navigator.userAgent</td> <td>"+ window.navigator.userAgent +"</td></tr>");
    document.write("<tr><td>Версия браузера<br>window.navigator.appVersion</td> <td>"+ window.navigator.appVersion +"</td></tr>");
    document.write("<tr><td>Кодовое название браузера<br>window.navigator.appCodeName</td> <td>"+ window.navigator.appCodeName +"</td></tr>");
    document.write("<tr><td>ОС, которую использует пользователь<br></td>window.navigator.platform<td>"+ window.navigator.platform +"</td></tr>");
    document.write("<tr><td>Включена ли поддержка Java в браузере<br>window.navigator.javaEnabled()</td> <td>"+ window.navigator.javaEnabled() +"</td></tr>");
    document.write("<tr><td>Ширина и высота экрана<br>screen.width, screen.height</td> <td>Ширина: "+ screen.width +"<br> Высота:"+ screen.height +"</td></tr>");
    document.write("<tr><td>Глубина цвета<br>screen.colorDepth</td> <td>"+ screen.colorDepth +"</td></tr>");
    document.write("<tr><td>URL, которые были посещены в данном окне браузера<br>history</td> <td>"+ history.length +"</td></tr>");
    document.write("<tr><td>URL текущего документа<br>location.href</td><td>"+ location.href +"</td></tr>");
    document.write("<tr><td>Путь к загруженному документу<br>location.pathname</td> <td>"+ location.pathname +"</td></tr>");
    document.write("<tr><td>Имя домена загруженного документа<br>location.host</td> <td>"+ location.host +"</td></tr>");
    document.write("</table>");
}