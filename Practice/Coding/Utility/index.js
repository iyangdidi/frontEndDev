import Queue from "./Queue.js";

// Example usage:
const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.dequeue()); // Output: 'a'
console.log(queue.peek()); // Output: 'b'
console.log(queue.size()); // Output: 2
queue.clear();
console.log(queue.isEmpty()); // Output: true
