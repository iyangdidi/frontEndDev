function depthFirstSearch(graph, source) {
    if (Object.keys(graph).length === 0) {
        return [];
    }

    const stack = [];
    const visited = new Set();
    stack.push(source);
    while (stack.length > 0) {
        const node = stack.pop();
        visited.add(node);

        const neighbors = graph[node];
        for (let i = neighbors.length - 1; i > -1; i--) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i]);
            }
        }
    }

    return Array.from(visited);
}

export default depthFirstSearch;
