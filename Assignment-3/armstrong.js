function isArmstrong(n){
    let sum = 0;
    let temp = n;
    while(temp){
        let rem = parseInt(temp%10);
        sum += rem*rem*rem;
        temp = parseInt(temp/10);
    }
    return sum === n;
}

console.log(isArmstrong(12));
console.log(isArmstrong(153));
