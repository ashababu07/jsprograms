"use strict";
class User {
    constructor() {
        this.dob = new Date("1999-04-22");
        this.name = "meenu";
        this.age = 23;
    }
    show() {
        console.log(this.dob);
        console.log(this.name);
        console.log(this.age);
    }
    getcode(pname) {
        for (let i of pname) {
            // console.log(i)
            if (typeof i === 'string') {
                // console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
                var regx = /^[a]/;
                // var regx=/^[a]/
                var result = regx.test(i);
                if (result) {
                    console.log(result);
                }
                // else{
                //     console.log("invalid")
                // }
            }
            if (typeof i == 'number') {
                console.log(i + " is a number");
                console.log("square of the numbe" + Math.pow(i, 2));
            }
        }
    }
}
let u = new User();
u.getcode(["neethu", "achu"]);
u.getcode([1, 2, 4]);
