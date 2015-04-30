//目标是返回一个构造函数

function Class(properties, parent) {
    var ctor = new Function,
        initialize = properties.initialize;

    if (typeof initialize === 'function') {
        ctor = initialize;
    }

    if (typeof parent === 'function') {
        ctor.prototype = new parent();
        ctor.prototype.constructor = ctor;

        ctor.__super__ = parent;
    } else {
        ctor.__super__ = Object;
    }


    //ASK 遍历一个对象, 更好地写法
    for (property in properties) {
        if (properties.hasOwnProperty(property)) {

            var isInstanceMethod = (typeof properties[property] === 'function') && property !== 'initialize';
            if (isInstanceMethod) {
                ctor.prototype[property] = properties[property];
            }
        }
    }

    var currentClass = ctor;
    ctor.prototype.super = function (method_name) {
        currentClass = currentClass.__super__;
        var superMethod = currentClass.prototype[method_name];

        if (typeof  superMethod === 'function') {
            var result = superMethod.apply(this, [].slice.call(arguments, 1));
            currentClass = ctor;

            return result;
        } else {
            throw new Error('method missing');
        }
    };


    return ctor;
}


module.exports = Class;

