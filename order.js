

product = ["book", "pen", "pencil"]
object = {

    book: 30,
    pen: 10,
    pencil: 5

}
function change() {
    object = {

        "book": 30,
        "pen": 10,
        "pencil": 5

    }
    var pro1 = document.getElementById("pro").value
    console.log(pro1)

    // document.getElementById(price).value=pro1


    if (pro1 == "book") {
        document.getElementById("price").value = object.book
    }
    if (pro1 == "pen") {
        document.getElementById("price").value = object.pen
    }
    if (pro1 == "pencil") {
        document.getElementById("price").value = object.pencil
    }
}

function alerts() {
    var oid = document.getElementById("orderid").value
    var proname=document.getElementById("pro").value
// alert(document.getElementById("pro").value)
var price1=document.getElementById("price").value

    // if (proname == "book") {
    //   var price= document.getElementById("price").value = object.book
    // }
    // if (proname == "pen") {
    //    var price=document.getElementById("price").value = object.pen
    // }
    // if (proname == "pencil") {
    //    var price= document.getElementById("price").value = object.pencil
    // }
   
    console.log(oid)
    console.log(proname)
    console.log(price1)


    if (oid == " " && proname ==" ") {
        console.log("ssdd")
        //   console.log("please the fill the details")
        alert("plz fill")

        return false
    }
    // var proname=document.getElementByI d("pro").value
// if(proname ==" ")
// {
//     console.log("aaaaaaaaaaaaaa")
// alert("plz fill the product")
// return false
// }
else{
    var e = new orders(oid,proname,price1);
}
function orders(oid1,proname1,pricee)
{
this.oid=oid1
this.proname=proname1
this.price1=pricee




// console.log(oid)
// console.log(this.proname)
}
        var l=localStorage.length
        console.log("length of localstorage",l)
        
        if(l>1)
        {
        var i=l+1
        // var e = new orders(oid,proname,price1);
      //   console.log(i)
      localStorage.setItem(i.toString(),JSON.stringify(e))
      var o= localStorage.getItem(i.toString())
      console.log(o)
      console.log(typeof o)
 //string ne veedum onject aaakkan parse because namukku .operator vilikkanam 
 o=JSON.parse(o)
 alert("json",o)
 var view=document.createElement("div")
 console.log(o.proname)
 console.log(o.price1)
 view.innerHTML=o["oid"]+"<br>"+o["proname"]+"<br>"+o["price1"]
 document.getElementById("demo").appendChild(view)
 console.log("i",i)
       
        }

        
        else{
            localStorage.setItem("1",JSON.stringify(e))
            var o= localStorage.getItem("1")
            var view=document.createElement("div")
            console.log(o.proname)
            view.innerHTML=o["proname"]+"<br>"+o["price"]
            document.getElementById("demo").appendChild(view)




        
       
    //    alert(o)
       console.log(o)
    //    console.log(e.oid) 
    //    console.log(e.proname)
        }
      //length

     
    }





