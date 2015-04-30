var Class = require("./index.js");

var A = Class({
    foo: function (a, b) {
        console.log("A#foo", a, b);
        return [a, b];
    }
});

var B = Class({
    foo: function (a, b) {
        console.log("B#foo", a, b);
        return this.super("foo", a * 10, b * 100);
    }
}, A);

var C = Class({
    foo: function (a, b) {
        console.log("C#foo", a, b);
        return this.super("foo", a * 10, b * 10);
    }
}, B);

var a = new A();
var b = new B();
var c = new C();

c.foo(1, 2);