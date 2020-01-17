class Test
{
    static i:number=1  //static variable
    j:number=1 // instance variable
    constructor()
    {
        Test.i+=1
        this.j+=1
        console.log(Test.i)
        console.log(this.j)

    }
}
let t=new Test()
let t1=new Test()