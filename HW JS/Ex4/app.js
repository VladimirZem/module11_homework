function getInterval(start, end) {  // Пишем функцию, которая принимает 2 параметра start и end 
    console.log(start) 
    let interval = setInterval(() => {  // Присваиваем переменой интервал
        start++                       // С каждым шагом прибавляем 1
        if(start == end) {            // Если первое значение равно второму значению, останавливаем функцию
            clearInterval(interval)
        }
        console.log(start)
    }, 1000);                          // Задаем интервал в мс
}

getInterval(5, 15)