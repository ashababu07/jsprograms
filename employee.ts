class Employee
{
    id:number
    name:string
    salary:number

constructor(empid,empname,empsal)
{
    this.id=empid
    this.name=empname
    this.salary=empsal
}

display():void{
    console.log(this.id)
    console.log(this.name)
    console.log(this.salary)
}

salaryincrement(amount):void{

    this.salary=this.salary+amount
    console.log("salary",this.salary)
    // var sal=emp.salary
    // var incresal=500+sal

    // console.log(incresal)
}

}
let emp:Employee=new Employee(1001,"swathy",2000)
emp.display()
emp.salaryincrement(500)