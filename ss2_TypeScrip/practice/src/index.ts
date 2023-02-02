// happy coding 👻
function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2){
        isPrime = false
    }else if(number > 2){
        for (let i=2; i <= Math.sqrt(number); i++){
            if (number % i === 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let sum = 0;
for (let number of arr){
    if (isPrime(number)){
        sum += number;
    }
}
console.log("Tổng các số nguyên tố là :" + sum)
