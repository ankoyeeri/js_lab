if(confirm('Вызвать ошибку?'))
{
    try{
        undefinedVariable   //  Неопределенная переменная, которая должна вызвать ошибку
    }
    catch(err)
    {
        alert('Ошибка: ' + err.name)
    }
}