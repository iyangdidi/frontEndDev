/**
 * `Set` order = insertion order
 * `forEach` order = from 0~length-1
 */
class Queue {
    constructor() {
        this.q = [];
    }

    deQueue = () => (this.q.length > 0 ? this.q.shift() : undefined);
    enQueue = (elem) => this.q.push(elem);

    isEmpty = () => this.q.length === 0;
}

function breadthFirstSearch(graph, source) {
    if (Object.keys(graph).length === 0) {
        return [];
    }

    const visited = new Set();
    const q = new Queue();
    q.enQueue(source);

    while (!q.isEmpty()) {
        const node = q.deQueue();
        visited.add(node);
        graph[node].forEach((neighbor) => {
            if (visited.has(neighbor)) {
                return;
            }
            q.enQueue(neighbor);
        });
    }

    return Array.from(visited);
}

export default breadthFirstSearch;
