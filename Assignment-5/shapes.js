class Cylinder{
    constructor(radius, height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let vol = Math.PI * Math.pow(this.radius, 2) * this.height;
        return vol.toFixed(4);
    }
}

class Sphere{
    constructor(radius){
        this.radius=radius;
    }

    getVolume(){
        let vol = (4/3) * Math.PI * Math.pow(this.radius, 3);
        return vol.toFixed(4);
    }
}

class Cone{
    constructor(radius, height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let vol = (1/3) * Math.PI * Math.pow(this.radius, 2) * this.height;
        return vol.toFixed(4);
    }
}

let cylinder = new Cylinder(1,1);
let sphere = new Sphere(1);
let cone = new Cone(1,1);

console.log(cylinder.getVolume());
console.log(sphere.getVolume());
console.log(cone.getVolume());