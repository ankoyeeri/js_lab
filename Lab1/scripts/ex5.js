//  Использование операторов сравнения

var a = prompt('Введите первое число:')
var b = prompt('Введите второе число:')

if (a > b)
{
    alert('a > b')
}
else if(a < b)
{
    alert('a < b')
}
else
{
    alert( 'a = b')
}

//  Тера=нарный оператор

if(confirm('Протестировать тернарный оператор?'))
{
    var a = prompt('Введите первое число:')
    var b = prompt('Введите второе число:')
    alert(a == b ? true : false)
}