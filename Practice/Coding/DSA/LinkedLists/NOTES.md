# Single linked lists
Linked lists are useful when you need a collection with a dynamic size and frequent insertions and deletions, especially at the beginning of the list, as these operations can be more efficient compared to arrays. However, linked lists do not provide direct access to elements by index, which means that finding an element requires traversing the list from the beginning, leading to O(n) time complexity for search operations.


Good for 
- dynamic size
- frequent insertions and deletions, especially at the beginning of the list

# Double linked lists
Doubly linked lists are particularly useful when you need to traverse a list in both directions or when you need to remove nodes from the list not only from the front but also from the back or the middle. The main disadvantage of doubly linked lists compared to singly linked lists is that they require more memory to store the additional prev pointer.


# Circular linked lists
Circular linked lists are useful when you need to repeatedly cycle through the list without needing to find the end, as the "end" immediately leads back to the "beginning." This makes them suitable for applications like round-robin scheduling, multiplayer board games, or implementing a carousel where the data needs to loop continuously.

The main difference in usage compared to a regular linked list is that you need to be careful when traversing a circular linked list to avoid getting into an infinite loop. You must have a condition to stop the loop, such as checking if you have returned to the head node


# Linked List Operations
- Traversal (or search)
- Sort
- Insertion
- Deletion