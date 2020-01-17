interface ICalculations
{
    add(a:number,b:number)
    multiply(x:number,y:number)
    division(p:number,q:number)
}
class Calculate implements ICalculations
{
    add(a:number,b:number):number
{
//     console.log(a+b)
// var addnum=a+b
// return addnum
// console.log(addnum)

return a+b
}
multiply(x:number,y:number)
{
    console.log(x*y)
var mulnum=x*y
return mulnum
}
division(p:number,q:number)
{
    console.log(p/q)
var divnum=p/q
return divnum
}


}
let a1:Calculate=new Calculate()
a1.add(10,10)
a1.multiply(20,20)
a1.division(100,10)