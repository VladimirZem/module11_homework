

const arrFunc = (x, n) => { // К константе arrFunc присваивем стрелочную функцию с параметрами x, n
    let result = x          // 
    for (let i = 1; i < n; i++) {
        result *= x;
      }
    return result

}
const result = arrFunc(2,1)

console.log (result)