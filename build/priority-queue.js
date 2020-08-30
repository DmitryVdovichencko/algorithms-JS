"use strict";
var createQueue = require('./queue');
function createPriorityQueue() {
    var lowPriorityQueue = createQueue();
    var highPriorityQueue = createQueue();
    return {
        //enqueue
        enqueue: function (item, isHighPriority) {
            if (isHighPriority === void 0) { isHighPriority = false; }
            isHighPriority
                ? highPriorityQueue.enqueue(item)
                : lowPriorityQueue.enqueue(item);
        },
        //dequeue
        dequeue: function () {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }
            return lowPriorityQueue.dequeue();
        },
        //peek
        peek: function () {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }
            return lowPriorityQueue.peek();
        },
        //length
        length: function () {
            return highPriorityQueue.length +
                lowPriorityQueue.length;
        },
        //isEmpty
        isEmpty: function () {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    };
}
var q = createPriorityQueue();
q.enqueue('build some logic');
q.enqueue('make CSS');
q.enqueue('fix a bug');
console.log(q.peek());
console.log(q.dequeue());
console.log(q.peek());
q.enqueue('Emergensy task', true);
console.log(q.dequeue());
console.log(q.peek());
