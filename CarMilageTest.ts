import{expect,assert} from "chai"
import{Car} from './car'
describe('tests milage of a car',()=>
{
    it('should engine exsists',()=>{
        let o=new Car("Alto",10000)

        expect(o.getEngine()).to.equal("Alto")
        // expect(o.getEngine()).to.equal("ALTO")
    })

    it('shoul get 100 mpg of 100 l',()=>{
        let o=new Car("Alto",10000)

        assert.equal(o.getMilage(100),100)
    })
    
})