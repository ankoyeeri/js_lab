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