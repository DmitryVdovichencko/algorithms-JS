module.exports = function createQueue() {
	const queue = [];

	return {
		// add item - enqueue
		enqueue(item) {
			queue.unshift(item);
		},
		// remove item - dequeue
		dequeue() {
			return queue.pop();
		},
		// peek
		peek() {
			return queue[queue.length -1]
		},
		// length
		get length() {
			return queue.length;

		},
		// isEmpty
		isEmpty() {
			return queue.length === 0;
		}
	}
}
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
