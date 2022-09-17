let val = 1
let str = ''

for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        str += val + ' ';
        val += 1;
    }
    console.log(str);
    str = '';
}
