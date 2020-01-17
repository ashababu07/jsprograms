class EmployeeDemo{
    firstname:string
    middlename:string
    lastname:string
    age:number

 display():void{
    console.log("Name:",this.firstname)
    console.log("Age:",this.age)
 }
 //constructor(fname:string,mdname:string,lname:string,age:number)   OR
    constructor(fname,mdname,lname,age){

        this.firstname=fname
        this.middlename=mdname
        this.lastname=lname
        this.age=age
}


}
let e:EmployeeDemo=new EmployeeDemo("Anna","p","paul",22)
e.display()
let e1:EmployeeDemo=new EmployeeDemo("akhil","p","pThomas",22)
e1.display()