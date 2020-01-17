"use strict";
class Person {
}
class Student extends Person {
    constructor(r, m) {
        super();
        this.rollno = r;
        this.marks = m;
    }
    dispaly() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.marks);
        console.log(this.rollno);
    }
}
let s = new Student(8, 88);
s.dispaly();
console.log(s.name);
s.name = "meenu"; // to pass value without using constructor
s.age = 33;
