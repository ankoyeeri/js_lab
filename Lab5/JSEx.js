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

function ex3(){
    for (let i = 0; i < document.all.length; i++) {
        if (document.all[i].tagName == 'SPAN') {
            alert("Использование коллекции all: " + document.all[i].innerHTML);
            break;
        }
    }
    alert("Использование частной коллекции (span): " + document.getElementsByTagName('SPAN')[1].innerHTML);
    alert("Использование идентификатора элемента: " + document.getElementById('firstSpanId').innerHTML);
}