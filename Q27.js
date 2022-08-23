// find sum of  4digit of number 

// find sum of digit to number 548 = 17

let sumOfDigit = (num) =>{
    let sum = 0;
    for(let i = 0;i<4;i++){
        let temp = num%10;
        sum+=temp;
        num = num /10;
    }
    return sum;
}

console.log(sumOfDigit(5481).toFixed(1));