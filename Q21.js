// (32°F − 32) × 5/9 = 0°C
// convert fahrenheit to celsius

let convertFahrenheitToCelsius = (fahrenheit) =>{
    return (fahrenheit - 32) * (5/9);
}

console.log(convertFahrenheitToCelsius(32));