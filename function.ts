class Person1{
    firstname:string
    middlename:string
    lastname:string
    age:number


    display():void{
        console.log("Name:",this.firstname)
        console.log("Age:",this.age)
    }
}
let p1:Person1=new Person1()
p1.firstname="Anna"
p1.middlename=""
p1.lastname="paul"
p1.age=12
p1.display()

let p2:Person1=new Person1()
p2.firstname="Meenu"
p2.middlename=""
p2.lastname="Philip"
p2.age=23
 
p2.display()