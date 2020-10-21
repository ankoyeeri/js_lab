function ex2() {
    var a = prompt('Введите a:')
    var b = prompt('Введите b:')

    document.write("<table border=1px cellpadding = 10 alighn = center>")

    for (var i = 1; i <= a; i++) {
        document.write("<tr>")

        for (var j = 1; j <= b; j++) {
            document.write("<td>" + i * j + "</td>")
        }

        document.write("</tr>")
    }

    document.write("</table>")
}

function ex3() {
    var a = prompt('Введите a:')
    var b = prompt('Введите b:')
    var r = Number(a)
    document.write("<table border=1px cellpadding = 10 alighn = center>")
    document.write("<tr><td>Радиус</td><td>Площадь круга</td><td>Длина окружности</td></tr>")

    do {
        document.write("<tr>")
        document.write("<td>" + Math.floor(r*10)/10 + "</td>")
        document.write("<td>" + Math.floor(Math.PI * Math.pow(r, 2)*10)/10 + "</td>")
        document.write("<td>" + Math.floor(2 * Math.PI * r * 10)/10 + "</td>")
        document.write("</tr>")
        r = r + 0.3
    }
    while (Number(r) <= b)

    document.write("</table>")
}

function ex4() {
    number1 = new Number(147)
    number2 = new Number(127.18)

    document.write("<table border=1px cellpadding = 10 alighn = center>")

    //  Целое число
    document.write("<tr><td>Целое число</td><td>Метод</td><td>Результат</td><td>Описание метода</td></tr>")

    //  toString
    document.write("<tr>")
    document.write("<td>" + number1 + "</td>")
    document.write("<td> toString(16) </td>")
    document.write("<td>" + number1.toString(16) + "</td>")
    document.write("<td> Строковое представление числа в 16-ричной системе счисления</td>")
    document.write("</tr>")

    //  toExponential
    document.write("<tr>")
    document.write("<td>" + number1 + "</td>")
    document.write("<td> toExpotential(2) </td>")
    document.write("<td>" + number1.toExponential(2) + "</td>")
    document.write("<td> Вывод числа с тремя числами после точки.</td>")
    document.write("</tr>")

    //  toFixed 
    document.write("<tr>")
    document.write("<td>" + number1 + "</td>")
    document.write("<td> toFixed(16) </td>")
    document.write("<td>" + number1.toFixed(8) + "</td>")
    document.write("<td> Представлене числа с фиксированным количеством цифр после точки </td>")
    document.write("</tr>")

    //  toPrecision
    document.write("<tr>")
    document.write("<td>" + number1 + "</td>")
    document.write("<td> toPrecision(16) </td>")
    document.write("<td>" + number1.toPrecision(2) + "</td>")
    document.write("<td> Представление числа с заданным количеством значащих чисел</td>")
    document.write("</tr>")

    //  Число с плавающей точкой
    document.write("<tr><td>Число с плавающей точкой</td><td>Метод</td><td>Результат</td><td>Описание метода</td></tr>")

    //  toString
    document.write("<tr>")
    document.write("<td>" + number2 + "</td>")
    document.write("<td> toString(16) </td>")
    document.write("<td>" + number2.toString(16) + "</td>")
    document.write("<td> Строковое представление числа в 16-ричной системе счисления</td>")
    document.write("</tr>")

    //  toExponential
    document.write("<tr>")
    document.write("<td>" + number2 + "</td>")
    document.write("<td> toExpotential(2) </td>")
    document.write("<td>" + number2.toExponential(2) + "</td>")
    document.write("<td> Вывод числа с тремя числами после точки.</td>")
    document.write("</tr>")

    //  toFixed 
    document.write("<tr>")
    document.write("<td>" + number2 + "</td>")
    document.write("<td> toFixed(16) </td>")
    document.write("<td>" + number2.toFixed(8) + "</td>")
    document.write("<td> Представлене числа с фиксированным количеством цифр после точки </td>")
    document.write("</tr>")

    //  toPrecision
    document.write("<tr>")
    document.write("<td>" + number2 + "</td>")
    document.write("<td> toPrecision(16) </td>")
    document.write("<td>" + number2.toPrecision(2) + "</td>")
    document.write("<td> Представление числа с заданным количеством значащих чисел</td>")
    document.write("</tr>")

}