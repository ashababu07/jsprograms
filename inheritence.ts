class Personn
{
    name:string
    age:number

  
}
class Studentt extends Personn
{
    rollno:number
    marks:number

    constructor(r,m)//parameterised constructor aaayathu kondu super() vilikkanam ie. parent ne
    {
        super()
        
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
let st=new Studentt(8,88)
st.dispaly()

console.log(st.name)
st.name="meenu" // to pass value without using constructor
st.age=33