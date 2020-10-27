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
    alert("Использование частной коллекции (span): " + document.getElementsByTagName('SPAN')[0].innerHTML);
    alert("Использование идентификатора элемента: " + document.getElementById('spanJs1').innerHTML);
}

function ex4() {
    try {
        alert(document.getElementsByTagName("td").length);

        let markSum = 0;
        let finalMark = 0;
        let tagTD = document.getElementsByTagName("td");
        let marksArray = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        for (let i = 0; i < tagTD.length; i++) {
            // alert(tagTD[i].innerHTML);
            for (let j = 0; j < marksArray.length; j++) {
                if (tagTD[i].innerHTML == marksArray[j]) {
                    markSum = markSum + Number(tagTD[i].innerHTML);
                }
            }
        }
        finalMark = markSum / 5;
        document.getElementById('spanJs2').innerHTML = "Средний балл: " + finalMark;
        alert(finalMark);
    }
    catch (err) {
        alert(arr);
    }

}