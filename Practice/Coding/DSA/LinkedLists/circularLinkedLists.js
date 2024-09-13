class CircularListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new CircularListNode(data);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    // Add a new node to the beginning of the list
    prepend(data) {
      const newNode = new CircularListNode(data);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    // Convert the linked list to an array for display purposes
    toArray() {
      const elements = [];
      if (this.head) {
        let current = this.head;
        do {
          elements.push(current.data);
          current = current.next;
        } while (current !== this.head);
      }
      return elements;
    }
  }
  
  // Usage example:
  const list = new CircularLinkedList();
  list.append(1);         // List is now: 1 -> 1 (circular)
  list.append(2);         // List is now: 1 -> 2 -> 1 (circular)
  list.prepend(0);        // List is now: 0 -> 1 -> 2 -> 0 (circular)
  
  console.log(list.toArray()); // Output: [0, 1, 2]