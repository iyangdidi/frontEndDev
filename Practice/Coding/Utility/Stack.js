class Stack {
    constructor() {
        this.items = [];
    }

    push = (item) => this.items.push(item);
    pop = () => this.isEmpty() ? null : this.items.pop();
    peek = () => this.isEmpty() ? null : this.items[this.items.length - 1];
 
    isEmpty = () => this.items.length === 0;
    size = () => this.items.length;
}