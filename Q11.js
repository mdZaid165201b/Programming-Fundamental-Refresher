// Find Factorial 

let findFactorial = (num) =>{
    if(num>=0){
        let fac = 1;
        for(i = 1;i<=num;i++){
            fac*=i;
        }
        return fac;
    }
    else{
        return "Invalid Number";
    }
}

// using Recursion
let findFac = (num) =>{
    if(num == 0) {
        return 1;
    }
    else{
        return num * findFac(num-1);
    }
    // console.log(fac);
}

console.log(findFactorial(4));
console.log(findFac(5))
