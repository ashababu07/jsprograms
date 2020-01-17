"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(e, distance) {
        this.engine = e;
        this.distancecovered = distance;
    }
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    Car.prototype.getMilage = function (fuelinliters) {
        return this.distancecovered / fuelinliters;
    };
    return Car;
}());
exports.Car = Car;
