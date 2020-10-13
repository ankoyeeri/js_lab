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
        document.write("<td>" + r + "</td>")
        document.write("<td>" + Math.PI * Math.pow(r, 2) + "</td>")
        document.write("<td>" + 2 * Math.PI * r + "</td>")
        document.write("</tr>")
        r = r + 0.3
    }
    while (Number(r) <= b)

    document.write("</table>")
}