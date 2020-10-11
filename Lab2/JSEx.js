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
