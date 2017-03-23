"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculation;
(function (calculation) {
    var calculate = (function () {
        function calculate(a, b) {
            this.a = a;
            this.b = b;
            return a + b;
        }
        calculate.prototype.sub = function (a, b) {
            (a - b);
        };
        calculate.prototype.multiply = function (a, b) {
            console.log(a * b);
        };
        calculate.prototype.square = function (a, b) {
            console.log(a * b);
        };
        return calculate;
    }());
    calculation.calculate = calculate;
})(calculation = exports.calculation || (exports.calculation = {}));
var addd = new calculation.calculate(1, 2);
console.log(addd);
