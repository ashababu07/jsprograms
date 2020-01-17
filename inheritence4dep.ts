class Department
{
    Depid:string
    Depname:string
    HOD:string

    constructor(did:string,dname:string,hod:string)
    {
this.Depid=did
this.Depname=dname
this.HOD=hod
    }
}
class Faculty extends Department
{
    facid:string
    facname:string
    subjects:string[]
    salary:number
    DOB:Date

    constructor(fid:string,fname:string,fsubjects,fsalary:number,
        dob:Date,did:string,dname:string,hod:string)
    {
        super(did,dname,hod)
        this.facid=fid
        this.facname=fname
        this.subjects=fsubjects
        this.salary=fsalary
        this.DOB=dob
    }
    inrsalary(amount)
    {
        var sal=this.salary+amount
        console.log(sal)
    }
}

// let f1=new Faculty("1","as",["eng","mala"],1000,10-09-2019,"d1","cse","jincy")
let f1=new Faculty("1","as",["eng","mala"],1000,new Date(2019-09-12),"d1","cse","jincy")
f1.inrsalary(500)
console.log(f1)