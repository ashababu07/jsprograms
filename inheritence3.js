"use strict";
class Person3 {
    constructor(n1, a1) {
        this.name = n1;
        this.age = a1;
    }
    getitem() {
        console.log(this.name);
        console.log(this.age);
    }
}
class Student3 extends Person3 {
    constructor(r, m, n, a) {
        // super()
        super(n, a);
        this.rollno = r;
        this.marks = m;
    }
    display1() {
        console.log(this.marks);
        console.log(this.rollno);
    }
}
// let s3=new Student3("ghh",3,"hfgh",88)
let p3 = new Student3("as", 8, "assaa", 55);
p3.getitem();
// console.log(obj.name)
// s.name="assdasdds" // to pass value without using 
