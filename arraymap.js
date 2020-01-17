//array map
//======================

var arr=[10,11,30,41,50]
var newarray=arr.map((item)=>{
    return item**2
})
console.log(newarray)

//filter
//======================
 var filterdarray=arr.filter((item)=>{
     return item%2==0
 })
 console.log(filterdarray)

// every
//===============
 var result=arr.every((item)=>{    //
    return item%2==0
})
console.log(result)


 //some
 //================
 var result=arr.some((item)=>{
    return item%2==0
})
console.log(result)

