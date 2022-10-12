
 function oddEvenTypeof () {
      const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
      let even = 0,
            odd = 0,
            zero = 0;
                              for (let i = 0; i < arr.length; i++) {   // Создаем переменную i и присваиваем значение, цикл будет выполнятся пока наша i меньше 
                                                                        // длины массива, каждый шаг цикла прибавляем к i 1
                              if (typeof arr[i] === 'number' && !isNaN(arr[i])) {  // Тут мы проверяем значение i на числовой тип И тип NaN
                                              if (arr[i] === 0) {   // Если i равно нулю, тогда к переменной zero + 1
                                                            zero += 1;
                                              } else if (arr[i] % 2 === 0) {  // Иначе, если при делении i на 2, остаток будет равен 0, то к even +1
                                                            even += 1;
                                              } else  {                      // Иначе к odd +1
                                                            odd += 1;
                                              }
                              }
                        }
console.log('четных элементов: ', even);
console.log('нечетных элементов: ', odd);
console.log('нулей: ', zero);
               }

oddEvenTypeof()


