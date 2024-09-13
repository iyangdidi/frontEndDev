class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Add a new node to the beginning of the list
    prepend(data) {
      const newNode = new ListNode(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Find a node with the given data
    find(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    // Remove a node with the given data
    remove(data) {
      if (!this.head) {
        return null;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Convert the linked list to an array for display purposes
    toArray() {
      const elements = [];
      let current = this.head;
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      return elements;
    }
}
  
  // Usage example:
  const list = new SinglyLinkedList();
  list.append(1);         // List is now: 1
  list.append(2);         // List is now: 1 -> 2
  list.prepend(0);        // List is now: 0 -> 1 -> 2
  list.append(3);         // List is now: 0 -> 1 -> 2 -> 3
  
  console.log(list.toArray()); // Output: [0, 1, 2, 3]
  
  const foundNode = list.find(2);
  console.log(foundNode); // Output: ListNode { data: 2, next: ListNode { data: 3, next: null } }
  
  list.remove(1);         // List is now: 0 -> 2 -> 3
  console.log(list.toArray()); // Output: [0, 2, 3]