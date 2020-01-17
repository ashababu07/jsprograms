"use strict";
class EmployeeDemo {
    //constructor(fname:string,mdname:string,lname:string,age:number)   OR
    constructor(fname, mdname, lname, age) {
        this.firstname = fname;
        this.middlename = mdname;
        this.lastname = lname;
        this.age = age;
    }
    display() {
        console.log("Name:", this.firstname);
        console.log("Age:", this.age);
    }
}
let e = new EmployeeDemo("Anna", "p", "paul", 22);
e.display();
let e1 = new EmployeeDemo("akhil", "p", "pThomas", 22);
e1.display();
