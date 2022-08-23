// checkPalindrome of number  1551 



let checkPalindrome = (num) =>{
    // console.log(num);
    let temp = num.toString().split('').reverse().join('');
    
    // console.log(temp);
    temp =parseInt(temp);
    console.log(typeof(temp));
    return temp === num ? true : false;
}

console.log(checkPalindrome(1551));