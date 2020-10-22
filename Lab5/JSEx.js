function ex1(){
    for(let i = 0; i < document.all.length; i++){
        alert(i + ") " + document.all[i].tagName );
    }
}

function ex2(){
    for(let i = 0; i < document.body.childNodes.length; i++){
        alert(document.body.childNodes[i].tagName);
    }
}