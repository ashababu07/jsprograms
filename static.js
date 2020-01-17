"use strict";
class Test {
    constructor() {
        this.j = 1; // instance variable
        Test.i += 1;
        this.j += 1;
        console.log(Test.i);
        console.log(this.j);
    }
}
Test.i = 1; //static variable
let t = new Test();
let t1 = new Test();
