"use strict";
module.exports = function createQueue() {
    var queue = [];
    return {
        // add item - enqueue
        enqueue: function (item) {
            queue.unshift(item);
        },
        // remove item - dequeue
        dequeue: function () {
            return queue.pop();
        },
        // peek
        peek: function () {
            return queue[queue.length - 1];
        },
        // length
        get length() {
            return queue.length;
        },
        // isEmpty
        isEmpty: function () {
            return queue.length === 0;
        }
    };
};
// const q = createQueue();
// q.enqueue("basic JS");
// q.enqueue("scope and closures JS");
// q.enqueue("this JS");
// console.log(q.isEmpty());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());
