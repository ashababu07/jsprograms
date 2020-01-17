"use strict";
class Institution {
    constructor() {
        this.name = "Expertslab"; //protected variable
    }
    setInstitutioncode(code) {
        this.instncode = code;
    }
    getInstitutioncode() {
        return this.instncode;
    }
    getBranches(branches) {
        for (let i of branches) {
            console.log(i);
        }
    }
}
let i = new Institution();
// console.log(i.instncode)//compile time error
// console.log(i.name)
i.setInstitutioncode("1k101");
console.log(i.getInstitutioncode());
i.getBranches(["ERM", "KOLLAM"]);
i.getBranches([11, 12, 13, 14]);
