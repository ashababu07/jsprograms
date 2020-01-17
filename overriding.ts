class Parent
{
    name:string
    age:number
constructor(n,a)
{
    this.name=n
    this.age=a
}
    getdata()
    {
        console.log(this.name)
    }
}
class Child extends Parent
{
    address:string

    // constructor(ad)
    // {
    //     this.address=ad
    // }
     getdata()
     {
         super.getdata()
         console.log(this.address)
     }

}
let c=new Child("ashwathy",25)
c.getdata()