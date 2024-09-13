# Queue
Queues can be implemented by using arrays or linked lists.

Queue Implementation using Arrays
- Reasons to implement queues using arrays:
  - Memory Efficient: Array elements do not hold the next elements address like linked list nodes do.
  - Easier to implement and understand: Using arrays to implement queues require less code than using linked lists, and for this reason it is typically easier to understand as well.
- Reasons for not using arrays to implement queues:
  - Fixed size: An array occupies a fixed part of the memory. This means that it could take up more memory than needed, or if the array fills up, it cannot hold more elements. And resizing an array can be costly.
  - Shifting cost: Dequeue causes the first element in a queue to be removed, and the other elements must be shifted to take the removed elements' place. This is inefficient and can cause problems, especially if the queue is long.
Alternatives: Some programming languages have built-in data structures optimized for queue operations that are better than using arrays.