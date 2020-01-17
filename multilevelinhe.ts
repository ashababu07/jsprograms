class A
{
    sid:number
    sname:string

    display1a()
    {
        console.log(this.sid)
    }

}
class B extends A{
    saddress:string
    smarks:string[]


    display1b()
    {
        console.log(this.saddress)
    }
}
class C extends B{
    splace:string
display1c()
{
    console.log(this.splace)
}

}
let c1=new C()
c1.display1a()
c1.display1b()
c1.display1c()
let a1=new A()
 a1.sid=12
// c1.saddress="abcd"
// c1.smarks=["12","22"]