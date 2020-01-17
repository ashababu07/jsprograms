"use strict";
class Product {
    constructor(proid, proname, proprice) {
        this.proid = proid;
        this.proname = proname;
        this.proprice = proprice;
    }
    display() {
        console.log(this.proid);
    }
}
let p1 = new Product(101, "toothpaste", 20);
p1.display();
