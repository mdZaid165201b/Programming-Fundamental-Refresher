// find Prime Number using function

let checkPrime = (num) => {
  if (num == 0 || num == 1) {
    return "Not Prime";
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return "Not Prime";
      }
    }
    return "Prime Number";
  }
};

console.log(checkPrime(9));
