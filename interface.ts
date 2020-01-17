interface IPolygon
{
    area(r:number)//declarations
    sides:number
}
class Circle implements IPolygon
{
    sides=0
    area(r:number)//evide definitions ellel work aaaaakula

    {
        console.log(3.14*r**2)
    }
}
let obj:Circle=new Circle()
obj.area(100)
//interface is like a contract

let obj1:IPolygon=new Circle()
console.log(obj.sides)