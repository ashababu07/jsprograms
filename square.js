/// <reference path="namespace.ts"/>
var Drawing;
(function (Drawing) {
    var Square = /** @class */ (function () {
        function Square() {
        }
        Square.prototype.draw = function () {
            console.log("A square is drawn....");
        };
        return Square;
    }());
    Drawing.Square = Square;
})(Drawing || (Drawing = {}));
