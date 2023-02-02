"use strict";
// happy coding 👻
function fibonacci(number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
let number = 50;
let sum = 0;
let array = [];
for (let i = 0; i <= number; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(array);
console.log(sum);
