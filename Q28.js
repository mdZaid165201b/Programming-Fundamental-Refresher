// inverse number 54321 to 12345

let reverseNumber = (num) => {
  let temp = num.toString();
  temp = temp.split("").reverse().join("");
  return temp;
};

console.log(reverseNumber(54321));
