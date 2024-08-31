class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Push item to the top of stack
     * @param {*} item
     * @return
     */
    push = (item) => this.items.push(item);
    pop = () => (this.isEmpty() ? undefined : this.items.pop());
    isEmpty = () => this.items.length === 0;
    peek = () => (this.isEmpty() ? undefined : this.items[this.length() - 1]);
    length = () => this.items.length;
}

export default Stack;
