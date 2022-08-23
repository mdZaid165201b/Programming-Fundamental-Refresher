// Find Eligibilty to Vote

let checkElegibility = (age)=>{
    return age >= 18 ? "Elgible" : "Not Eligible";
}

console.log(checkElegibility(18));