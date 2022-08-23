// return minimum number entered by user

let findMin = (num1,num2,num3)=>{
    if(num1 < num2 && num1 < num3) return num1;
    if(num2 < num1 && num2 < num3) return num2;
    if(num3 < num2 && num3 < num1) return num3;
}

console.log(findMin(5000,0.2,50));