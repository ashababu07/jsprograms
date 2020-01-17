"use strict";
class Calculate {
    add(a, b) {
        //     console.log(a+b)
        // var addnum=a+b
        // return addnum
        // console.log(addnum)
        return a + b;
    }
    multiply(x, y) {
        console.log(x * y);
        var mulnum = x * y;
        return mulnum;
    }
    division(p, q) {
        console.log(p / q);
        var divnum = p / q;
        return divnum;
    }
}
let a1 = new Calculate();
a1.add(10, 10);
a1.multiply(20, 20);
a1.division(100, 10);
