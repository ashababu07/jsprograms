class Institution
{
  private instncode:string//private variable   ="1k101" 
protected name="Expertslab"//protected variable
setInstitutioncode(code)
{
    this.instncode=code
}
getInstitutioncode():string
{
    return this.instncode
}
getBranches(branches:string[]|number[])
{
    for(let i of branches)
    {
        console.log(i)
    }
}
}
let i:Institution =new Institution()
// console.log(i.instncode)//compile time error
// console.log(i.name)
i.setInstitutioncode("1k101")
console.log(i.getInstitutioncode())
i.getBranches(["ERM","KOLLAM"])
i.getBranches([11,12,13,14])