function isLeapYear(year){
    if (year%400 == 0)
        return true
    if (year%100 == 0)
        return false
    if (year%4 == 0)
        return true
    else
        return false
}

console.log(isLeapYear(2000))
console.log(isLeapYear(1900))
console.log(isLeapYear(1997))
console.log(isLeapYear(1996))