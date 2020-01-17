class Person1
{
    name:string
    age:number

    constructor(n1,a1)
    {
        this.name=n1
        this.age=a1
    }

    getitem()
    {
        console.log(this.name)
        console.log(this.age)
    }

}
class Student1 extends Person1
{
    rollno:string
    marks:number

    constructor(r,m,n,a)//parameterised constructor aaayathu kondu super() vilikkanam ie. parent ne
    {
        // super()
        super(n,a)
        this.rollno=r
        this.marks=m


    }
    dispaly()
    {
        
        console.log(this.marks)
        console.log(this.rollno)
        console.log(this.name)
        console.log(this.age)
        
    }
    
}
let s1=new Student1("as",8,"assaa",55)
s1.dispaly()
s1.getitem()
// console.log(obj.name)
// s.name="assdasdds" // to pass value without using 
