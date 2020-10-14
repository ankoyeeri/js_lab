function ex1() {
    //  Сформировать массив (объект Array), элементами которого являются
    //  значения выражений

    let arr = new Array();

    arr[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
    arr[1] = 2 * Math.cos(12) + 8 * Math.exp(3);
    arr[2] = 3 * Math.sin(9) + Math.log10(5) + Math.sqrt(3);
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
    document.write("Длина массива Array: " + arrArray.length +"</br>");
    document.write("Длина массива Math: " + arrMath.length +"</br>");
    document.write("</p>");
}