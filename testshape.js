"use strict";
/// <reference path="namespace.ts"/>
/// <reference path="circle.ts"/>
/// <reference path="square.ts"/>
function drawShape(obj) {
    obj.draw();
}
drawShape(new Drawing.Circle());
drawShape(new Drawing.Square());
