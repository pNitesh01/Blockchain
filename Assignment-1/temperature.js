function celsiusToFarhenheit(cTemp){
    var fTemp = 1.8 * cTemp + 32
    return `${cTemp}°C is ${fTemp}°F`
}

function farhenheitToCelsius(fTemp){
    var cTemp = (5/9)*(fTemp - 32)
    return `${fTemp}°F is ${cTemp}°C`
}

console.log(celsiusToFarhenheit(60))
console.log(farhenheitToCelsius(45))
