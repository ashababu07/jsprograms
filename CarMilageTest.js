"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var car_1 = require("./car");
describe('tests milage of a car', function () {
    it('should engine exsists', function () {
        var o = new car_1.Car("Alto", 10000);
        chai_1.expect(o.getEngine()).to.equal("ALTO");
    });
    it('shoul get 100 mpg of 100 l', function () {
        var o = new car_1.Car("Alto", 10000);
        chai_1.assert.equal(o.getMilage(100), 100);
    });
});
