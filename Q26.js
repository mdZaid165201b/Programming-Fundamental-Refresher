// find sum of digit to number 548 = 17

let sumOfDigit = (num) =>{
    let sum = 0;
    for(let i = 0;i<3;i++){
        let temp = num%10;
        sum+=temp;
        num = num /10;
    }
    return sum;
}

console.log(sumOfDigit(548).toFixed(1));