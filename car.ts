export class Car
{
    engine:string
    distancecovered:number

    constructor(e:string,distance:number)
    {
        this.engine=e
        this.distancecovered=distance
    }
    getEngine()
    {
        return this.engine
    }
    getMilage(fuelinliters:number)
    {
        return this.distancecovered/fuelinliters
    }
}