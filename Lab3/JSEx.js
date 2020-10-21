function ex1() {
    //  Сформировать массив (объект Array), элементами которого являются
    //  значения выражений

    let arr = new Array();

    arr[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
    arr[1] = 2 * Math.cos(4) + Math.cos(12)  + 8 * Math.exp(3);
    arr[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    arr[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);

    document.write("<p>");

    for (let i = 0; i < arr.length; i++) {
        document.write(i + ". " + arr[i] + "</br>");
    }

    maxVal = Math.max.apply(null, arr)
    maxValIndex = arr.indexOf(Math.max(...arr))

    minVal = Math.min.apply(null, arr)
    minValIndex = arr.indexOf(Math.min(...arr))

    document.write("<p>Максимальный элемент в массиве: " + maxValIndex + ") " + maxVal + "</p>");
    document.write("<p>Минимальный элемент в массиве: " + minValIndex + ") " + minVal + "</p>");
    document.write("</p>");
}

function ex2() {
    let arr = new Array("pow", "pop", "push", "shift", "round", "floor", "sline", "sort");

    let arrArray = new Array();
    let arrMath = new Array();

    indexCounterArray = 0;
    indexCounterMath = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in Math) {
            arrMath[indexCounterMath] = arr[i];
            indexCounterMath++;
        }
        else {
            arrArray[indexCounterArray] = arr[i];
            indexCounterArray++;
        }
    }


    //  Добавить элемент в начало массива
    arrArray.unshift("unshift");

    //  Добавить элемент в конец массива
    arrMath.push("random");

    document.write("<p>");
    document.write("Методы Array: " + arrArray + "</br>");
    document.write("Методы Math: " + arrMath + "</br>");
    document.write("Длина исходного массива: " + arr.length + "</br>");
    document.write("Длина массива Array: " + arrArray.length + "</br>");
    document.write("Длина массива Math: " + arrMath.length + "</br>");
    document.write("</p>");
}

function ex3() {
    let varStr = new String("Гуз Ярослав Максимович");

    let upperCase = varStr.toUpperCase();
    let lowerCase = varStr.toLowerCase();

    document.write("<p>");
    document.write("Строка: " + varStr + "</br>");
    document.write("Длина строки: " + varStr.length + "</br>");
    document.write("Перевод строки в верхний регистр: " + upperCase +"</br>");
    document.write("Перевод строки в нижний регистр: " + lowerCase +"</br>");
    document.write("Слияние строк: " + upperCase.concat(lowerCase) + "</br>");
    document.write("Замена строки: " + varStr.replace(varStr,"Г.Я.М") + "</br>");
    document.write("</p>");
}

function ex4(){
    let varDate = new Date();

    document.write("<table border = 1px cellpadding = 10 alighn = center>");
    document.write("<tr><td>Год</td><td>"+ varDate.getFullYear() +"</td></tr>");
    document.write("<tr><td>Месяц</td><td>"+ varDate.getMonth() +"</td></tr>");
    document.write("<tr><td>День</td><td>"+ varDate.getDay() +"</td></tr>");
    document.write("<tr><td>Час</td><td>"+ varDate.getHours() +"</td></tr>");
    document.write("<tr><td>Минуты</td><td>"+ varDate.getMinutes() +"</td></tr>");
    document.write("<tr><td>Секунды</td><td>"+ varDate.getSeconds() +"</td></tr>");
    document.write("</table>");
}