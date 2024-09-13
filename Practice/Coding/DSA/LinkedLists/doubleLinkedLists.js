class DoublyListNode {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new DoublyListNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Add a new node to the beginning of the list
    prepend(data) {
      const newNode = new DoublyListNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    // Remove a node with the given data
    remove(data) {
      if (!this.head) {
        return null;
      }
      let current = this.head;
      while (current) {
        if (current.data === data) {
          if (current.prev) {
            current.prev.next = current.next;
          } else {
            this.head = current.next;
          }
          if (current.next) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev;
          }
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
  const list = new DoublyLinkedList();
  list.append(1);         // List is now: 1
  list.append(2);         // List is now: 1 <-> 2
  list.prepend(0);        // List is now: 0 <-> 1 <-> 2
  list.append(3);         // List is now: 0 <-> 1 <-> 2 <-> 3
  
  console.log(list.toArray()); // Output: [0, 1, 2, 3]
  
  list.remove(1);         // List is now: 0 <-> 2 <-> 3
  console.log(list.toArray()); // Output: [0, 2, 3]