class Queue {
    constructor() {
        this.items = []
    }

    enqueue = (item) => this.items.push(item);

    dequeue = () => this.isEmpty() ? null : this.items.shift();

    peek = () => this.isEmpty() ? null : this.items[0];

    clear = () => this.items = [];

    isEmpty = () => this.items.length === 0;

    size = () => this.items.length;
}

export default Queue;

