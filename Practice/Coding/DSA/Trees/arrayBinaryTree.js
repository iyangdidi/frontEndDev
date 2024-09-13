
function BTTraversal(arrTree) {
    const n = arrTree.length;
    recursive();
    iterative();

    function recursive() {
        console.log('Traversal>recursive soltuion')
        console.log('pre-order: ' + preOrder([], 0).toString()); // R,A,C,D,B,E,F,G
        console.log('in-order: ' + inOrder([], 0).toString()); // C,A,D,R,E,B,G,F
        console.log('post-order: ' + postOrder([], 0).toString()); // C,D,A,E,G,F,B,R
    
        // parent > left > right
        function preOrder(resArr, nodeIdx) {
            if (nodeIdx >= n || arrTree[nodeIdx] === null) {
                return resArr;
            }
            const leftNodeIdx = nodeIdx * 2 + 1;
            const rightNodeIdx = nodeIdx * 2 + 2;
    
            resArr.push(arrTree[nodeIdx]);
            preOrder(resArr, leftNodeIdx);
            preOrder(resArr, rightNodeIdx);
    
            return resArr;
        }
    
        // left > parent > right
        function inOrder(resArr, nodeIdx) {
            if (nodeIdx >= n || arrTree[nodeIdx] === null) {
                return resArr;
            }
            const leftNodeIdx = nodeIdx * 2 + 1;
            const rightNodeIdx = nodeIdx * 2 + 2;
           
            inOrder(resArr, leftNodeIdx);
            resArr.push(arrTree[nodeIdx]);
            inOrder(resArr, rightNodeIdx);
            
            return resArr;
        }
    
        // left > right > parent
        function postOrder(resArr, nodeIdx) {
            if (nodeIdx >= n || arrTree[nodeIdx] === null) {
                return resArr;
            }
            const leftNodeIdx = nodeIdx * 2 + 1;
            const rightNodeIdx = nodeIdx * 2 + 2;
           
            postOrder(resArr, leftNodeIdx);
            postOrder(resArr, rightNodeIdx);
            resArr.push(arrTree[nodeIdx]);
    
            return resArr;
        }  
    }

    function iterative() {
        console.log('Traversal>iterative soltuion')
        console.log('pre-order: ' + preOrder().toString()); // R,A,C,D,B,E,F,G
        console.log('in-order 1: ' + inOrder().toString()); // C,A,D,R,E,B,G,F
        console.log('in-order 2: ' + inOrder2().toString()); // C,A,D,R,E,B,G,F
        console.log('post-order: ' + postOrder().toString()); // C,D,A,E,G,F,B,R

        function preOrder() {
            const resArr = [];
            const stack = [];
            if (arrTree.length === 0) {
                return resArr;
            }

            stack.push(0);
           
            while(stack.length > 0) {
                const nodeIdx = stack.pop();
                const leftNodeIdx = nodeIdx * 2 + 1;
                const rightNodeIdx = nodeIdx * 2 + 2;

                if (arrTree[nodeIdx]) {
                    resArr.push(arrTree[nodeIdx]);

                    if (rightNodeIdx < n) {
                        stack.push(rightNodeIdx);
                    }

                    if (leftNodeIdx < n) {
                        stack.push(leftNodeIdx);
                    }
                }
            }

            return resArr;
        }

        function inOrder() {
            const stack = [];
            const result = [];

            let nodeIdx = 0;
            while(stack.length > 0 || nodeIdx < arrTree.length) {
                if (nodeIdx < arrTree.length) {
                    stack.push(nodeIdx);
                    nodeIdx = nodeIdx * 2 + 1;
                } else {
                    nodeIdx = stack.pop();
                    if (arrTree[nodeIdx]) {
                        result.push(arrTree[nodeIdx]);
                    }
                    nodeIdx = nodeIdx * 2 + 2;
                }
            }

            return result;
        }

        function inOrder2() {
            const stack = [];
            const result = [];

            let nodeIdx = 0;
            while(stack.length > 0 || nodeIdx < arrTree.length) {
                // Keep adding left child
                while(nodeIdx < arrTree.length) {
                    stack.push(nodeIdx);
                    nodeIdx = nodeIdx * 2 + 1;
                }

                // Pop & print the last left child
                nodeIdx = stack.pop();
                if (arrTree[nodeIdx]) {
                    result.push(arrTree[nodeIdx]);
                }
                // move to the last left child's right child
                nodeIdx = nodeIdx * 2 + 2;
            }

            return result;
        }

        function postOrder() {
            const stack = [];
            const result = [];
            const visited = new Set();

            stack.push(0); // Start with the root node index

            while(stack.length > 0) {
                const nodeIndex = stack[stack.length - 1];
                if (arrTree[nodeIndex] !== null && !visited.has(nodeIndex)) {
                    visited.add(nodeIndex);
                    const rightChildIndex = 2 * nodeIndex + 2;
                    const leftChildIndex = 2 * nodeIndex + 1;

                    if (rightChildIndex < arrTree.length) {
                        stack.push(rightChildIndex); // Right child pushed first
                    }

                    if (leftChildIndex < arrTree.length) {
                        stack.push(leftChildIndex); // Left child pushed next
                    }
                } else {
                    stack.pop(); // All children processed, now process the node
                    if (arrTree[nodeIndex]) {
                        result.push(arrTree[nodeIndex]);
                    }
                }
            }

            return result;
        }
    }
}

const arrTree = ['R', 'A', 'B', 'C', 'D', 'E', 'F', null, null, null, null, null, null, 'G'];
BTTraversal(arrTree);
