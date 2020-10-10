//  Вычисление двух арифметических выражений

var x, y

x = 2
y = 20

var expression1 = (35 * y - 25 * x)/5 + 232
var expression2 = (8 * y / x + 5 * x / y - 5) * 60

var result = expression2 % expression1

alert('Выражение 1: ' + expression1)
alert('Выражение 2: ' + expression2)

alert('Остаток от деления:  ' + result)

document.write('Остаток от деления: ' + result)