function ex3(){

    document.getElementById("jsPrint").innerHTML = 
    "<u>" + 
    document.forms["data"].elements[0].value + 
    "</u><br>" +
    "Студент " + 
    document.forms["data"].elements[1].value + 
    " специальность " +
    document.forms["data"].select.value + 
    " курс " + 
    document.forms["data"].year.value + 
    " должен сдавать следующие предметы:";

    for(let i = 0; i < 5; i++){
        if(document.forms["data"].subject[i].checked){
            // document.getElementById("jsList").innerHTML = document.forms["data"].subject[i].value + "<br>";
            // ("<li>" +document.forms["data"].subject[i].value + "</li>"); 
            var node = document.createElement("LI");
            var textnode = document.createTextNode(document.forms["data"].subject[i].value);
            node.appendChild(textnode);
            document.getElementById("jsList").appendChild(node);
        }
    }
    try{
        // alert(document.forms["data"].subject[1].value);
    }
    catch(err){
        alert(err);
    }
    
}