function factorial(n){
    if(n===1) return 1;
    return n*factorial(n-1);
}

function isSpecial(n){
    let sum = 0;
    let temp = n;
    while(temp){
        let rem = parseInt(temp%10);
        sum += factorial(rem);
        temp = parseInt(temp/10);
    }
    return sum === n;
}

console.log(isSpecial(145));
console.log(isSpecial(12));
