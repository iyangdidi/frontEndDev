/**
 * https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions
 * `push`, `pop` -> O(1), but in practice it will encounter an O(N) copy costs
 * `shift`, `slice`, `splice` -> O(N)
 *
 * Use array won't achive O(1) for enqueue/dequeue
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Queue {
    constructor() {
        this._dummyHead = new Node();
        this._dummyTail = new Node();
        this._dummyHead.next = this._dummyTail;
        this._dummyTail.prev = this._dummyHead;
        this._length = 0;
    }

    // O(1)
    enqueue = (item) => {
        const itemNode = new Node(item);
        // update last node
        const lastNode = this._dummyTail.prev;
        lastNode.next = itemNode;
        // update current node
        itemNode.prev = lastNode;
        itemNode.next = this._dummyTail;
        // update dummyTail
        this._dummyTail.prev = itemNode;

        this._length++;
        return this._length;
    };

    // O(1)
    dequeue = () => {
        if (this.isEmpty()) {
            return;
        }

        const firstNode = this._dummyHead.next;
        const secondNode = firstNode.next;
        this._dummyHead.next = secondNode;
        secondNode.prev = this._dummyHead;

        // unlink the code
        firstNode.next = null;
        firstNode.prev = null;

        this._length--;
        return firstNode.value;
    };

    isEmpty = () => this._length === 0;

    front = () => (this.isEmpty() ? undefined : this._dummyHead.next.value);
    back = () => (this.isEmpty() ? undefined : this._dummyTail.prev.value);

    length = () => this._length;
}

export default Queue;
