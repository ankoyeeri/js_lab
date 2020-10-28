function ex3(){
    win = open('', "window", "width=300, height=300")
    win;
    win.document.write("<u>");
    win.document.write(document.forms["data"].elements[0].value);
    win.document.write("</u> <br>"); 
    win.document.write(`Студент ${document.forms["data"].elements[1].value} специальность ${document.forms["data"].select.value} курс 
    ${document.forms["data"].year.value} должен сдавать следующие предметы:`); 

    win.document.write("<ul>"); 
    for(let i = 0; i < 5; i++){
        if(document.forms["data"].subject[i].checked){
            win.document.write("<li>");
            win.document.write(document.forms["data"].subject[i].value);
            win.document.write("</li>");
        }
    }
    win.document.write("</ul>");
    try{
        // alert(document.forms["data"].subject[1].value);
    }
    catch(err){
        alert(err);
    }
    
}