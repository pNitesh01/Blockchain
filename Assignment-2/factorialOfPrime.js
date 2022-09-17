
function isPrime(n){
    if(n<=1) return false;
    for(let i=2; i<n; i++){
        if(n%i===0) return false;
    }
    return true;
}

function getFactorial(n){
    if(n===1) return 1;
    return n*getFactorial(n-1);
}

function getPrimeFactorial(x, y){
    for(let i=x; i<=y; i++){
        if(isPrime(i)) console.log(i, getFactorial(i));
    }
}

getPrimeFactorial(1, 100);
