class Person2
{
    name:string
    age:number

    constructor(n,a)
    {
        this.name=n
        this.age=a
    }
    

}
class Student2 extends Person2
{
    rollno:string
    marks:number

    constructor(r,m,n,a)//parameterised constructor aaayathu kondu super() vilikkanam ie. parent ne
    {
        super(n,a)
   
        this.rollno=r
        this.marks=m


    }
    dispaly()
    {
        console.log(this.name)
        console.log(this.age)
        console.log(this.marks)
        console.log(this.rollno)

    }
    
}
let s2=new Student2("33",56,"ann",20)
s2.dispaly()
// console.log(obj.name)
// s2.name="assdasdds" // to pass value without using 
