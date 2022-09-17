function isTriangle(x, y, z){
    let cond1 = (x+y > z);
    let cond2 = (x+z > y);
    let cond3 = (y+z > x);
    return cond1 && cond2 && cond3;
}

function get_triangle_type(x, y, z){
    if(isTriangle(x, y, z)){
        if((x===y) && (y===z)) return "Equilateral Triangle";
        if((x===y)||(y===z)) return "Isoceles Triangle";
        return "Scalene Triangle";
    } else {
        return "Not a Triangle";
    }
}

console.log(get_triangle_type(3,3,3));
console.log(get_triangle_type(5,5,2));
console.log(get_triangle_type(3,4,5));
console.log(get_triangle_type(1,10,12));
