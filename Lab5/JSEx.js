function ex1() {
    for (let i = 0; i < document.all.length; i++) {
        alert(i + ") " + document.all[i].tagName);
    }
}

function ex2() {
    for (let i = 0; i < document.body.childNodes.length; i++) {
        alert(document.body.childNodes[i].tagName);
    }
}

function ex3() {
    for (let i = 0; i < document.all.length; i++) {
        if (document.all[i].tagName == 'SPAN') {
            alert("Использование коллекции all: " + document.all[i].innerHTML);
            break;
        }
    }
    alert("Использование частной коллекции (span): " + document.getElementsByTagName('SPAN')[1].innerHTML);
    alert("Использование идентификатора элемента: " + document.getElementById('firstSpanId').innerHTML);
}

function ex4() {
    // try {
    //     let finalMark;
    //     for (let i = 1; i < 5; i++) {
    //         finalMark += document.getElementById('mark').innerHTML;
    //     }
    //     alert(finalMark);
    // }
    // catch (err) {
    //     alert(err);
    // }

    try{
        alert(document.getElementsByTagName("td").length);
        
        let markSum, finalMark;
        let tagTD = document.getElementsByTagName("td");

        for(let i = 0; i < tagTD.length; i++){
            // alert(tagTD[i].innerHTML);
            if(tagTD >= 0 && tagTD <= 10)
            {
                markSum += Number(tagTD[i].innerHTML);
            }
        }

        alert(markSum);

    }   
    catch(err){
        alert(arr);
    }

}