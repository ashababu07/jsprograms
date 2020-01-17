"use strict";
class Student {
    constructor(rollno, sname, sage) {
        this.rollnumber = rollno;
        this.name = sname;
        this.age = sage;
        console.log(this.rollnumber);
        console.log(this.name);
        console.log(this.age);
    }
}
let s = new Student(1, "anu", 22);
// or   let s=new Student(1,"anu",22)
// s.display()
//console.log(s.rollnumber)
