obj = {};
console.log(typeof obj);
console.log(obj);
obj.a = 10;
obj.b = 100;
obj.display=function()
{
    console.log(this.a)
    console.log(this.b)

}
console.log(obj)
obj.display()