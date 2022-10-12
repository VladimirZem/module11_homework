function getSumFunction(a) { //функция принимает число как аргумент
    return function(b) { //и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел
          return a + b
    }
  }

const sumFunction = getSumFunction(10); //здесь мы передаём первое значение

const sum = sumFunction(5) //здесь мы передаём второе значение

console.log(sum); // должны получить 15