// happy coding 👻
function fibonacci(number: number): number {
    if (number == 0 || number ==1){
        return 1;
    }else {
        return fibonacci(number-1) + fibonacci(number-2)
    }
}

let number : number = 50;
let sum: number = 0;
let array : Array<number> = [];
for (let i = 0; i<=number; i++){
    array.push(fibonacci(i));
    sum +=fibonacci(i);
}
console.log(array);
console.log(sum);