var x1:number[];
var z1:number[]=[100,2000,4000]
console.log(z1)

//creating function


function add(...args:number[])
{
    var sum=0
   for(var i of args)   
   {
       sum+=i
       //var result=sum+i
       
   } 
   console.log("result",sum)           
}
add(10,20,30,40)