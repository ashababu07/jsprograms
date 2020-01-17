function person()
{
    this.name="Ann"
    this.age=22

    this.display=function()
    {
console.log(this.age)
console.log(this.name)
    }
}
var obj=new person()
console.log(obj.name)
obj.display()



//OR



// function person(name,age)
// {
//     this.name=name
//     this.age=age

//     this.display=function()
//     {
// console.log(this.age)
// console.log(this.name)
//     }
// }
// var obj=new person("ann",12)
// console.log(obj.name)
// obj.display()