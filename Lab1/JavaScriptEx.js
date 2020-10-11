function ex1() {
    // alert('hi')             //  модальное окно alert - вывод сообщения
    // prompt('Введите имя')   //  модальное окно prompt - окно ввода
    // confirm('ОК?')          //  модальное окно confirm - окно подтверждения

    alert('Вас приветсвует учебный центр!')
    prompt('Ввеите имя:')

    if (confirm('Хотите стать Web-дизайнером?')) {
        alert('Учите стили CSS и JavaScript!')
    }
    else {
        alert('Упускаете время!')
    }
}

function ex2() {
    //  Использование оператора + с числовыми и строковыми переменными

    var resIntSum = 10 + 5
    alert('Сумма двухх целых чисел: ' + resIntSum)

    var resStrSum = '10' + '5'
    alert('Сумма двух строк: ' + resStrSum)

    var resSumIntStr = 22 + '5'
    alert('Сумма целого числа и строки: ' + resSumIntStr)

    var resSumStrInt = '22' + 5
    alert('Сумма строки и целого числа: ' + resSumStrInt)

    alert('Результатом сложения строки и числа всегда будет ' + resSumStrInt)
}

function ex3() {
    //  Вычисление двух арифметических выражений

    var x, y

    x = 2
    y = 20

    var expression1 = (35 * y - 25 * x) / 5 + 232
    var expression2 = (8 * y / x + 5 * x / y - 5) * 60

    var result = expression2 % expression1

    alert('Выражение 1: ' + expression1)
    alert('Выражение 2: ' + expression2)

    alert('Остаток от деления:  ' + result)

    document.write('Остаток от деления: ' + result)
}

function ex4() {
    //  Демонстрация использования операторов сравнения и логических
    //  операторов

    var intVar = prompt('Введите любое число:')
    if (intVar < 20 || intVar > 40 && intVar != 15 && intVar % 5 == 0) {
        alert('Правильное значение')
    }
    else {
        alert('Не правильное значение')
    }

    var a, b

    a = 5
    b = 9

    alert('Используемые операторы:' + '\na: ' + a + '\nb: ' + b)

    alert('Оператор ==: ' + (a == b))
    alert('Оператор !=: ' + (a != b))
    alert('Оператор >: ' + (a > b))
    alert('Оператор >=: ' + (a >= b))
    alert('Оператор <: ' + (a < b))
    alert('Оператор <=: ' + (a <= b))

    if (a != b) {
        alert('Оператор !=:\na!=b')
    }
    if (a != b && a < b) {
        alert('Оператор &&:\n a не равно b и a меньше b')
    }
    if (a > b || b > a) {
        alert('Оператор ||:\nлибо а > b, либо b > a')
    }
}

function ex5() {
    //  Использование операторов сравнения

    var a = prompt('Введите первое число:')
    var b = prompt('Введите второе число:')

    if (a > b) {
        alert('a > b')
    }
    else if (a < b) {
        alert('a < b')
    }
    else {
        alert('a = b')
    }

    //  Тера=нарный оператор

    if (confirm('Протестировать тернарный оператор?')) {
        var a = prompt('Введите первое число:')
        var b = prompt('Введите второе число:')
        alert(a == b ? true : false)
    }
}

function ex6() {
    var dayOfWeek = prompt('Введите, какой сейчас день недели')

    switch (dayOfWeek) {
        case 'Понедельник':
            alert('Вы выбрали понедельник')
            break;
        case 'Вторник':
            alert('Вы выбрали вторник')
            break;
        case 'Среда':
            alert('Вы выбрали среда')
            break;
        case 'Четверг':
            alert('Вы выбрали четверг')
            break;
        case 'Пятница':
            alert('Вы выбрали пятницу')
            break;
        case 'Суббота':
            alert('Вы выбрали субботу')
            break;
        case 'Воскресенье':
            alert('Вы выбрали воскресенье')
            break;
    }
}

function ex7() {
    if (confirm('Вызвать ошибку?')) {
        try {
            undefinedVariable   //  Неопределенная переменная, которая должна вызвать ошибку
        }
        catch (err) {
            alert('Ошибка: ' + err.name)
        }
    }
}