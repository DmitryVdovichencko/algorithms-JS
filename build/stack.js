"use strict";
// Stacks
function createStack() {
    var array = [];
    return {
        push: function (item) {
            array.push(item);
        },
        pop: function () {
            array.pop();
        },
        peek: function () {
            return array[length - 1];
        },
        get length() {
            return array.length;
        },
        isEmpty: function () {
            return array.length === 0;
        }
    };
}
