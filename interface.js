"use strict";
class Circle {
    constructor() {
        this.sides = 0;
    }
    area(r) {
        console.log(3.14 * Math.pow(r, 2));
    }
}
let obj = new Circle();
obj.area(100);
//interface is like a contract
let obj1 = new Circle();
console.log(obj.sides);
