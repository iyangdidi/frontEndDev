class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    buildBalancedBSTFromSortedArr(arr){
        this.root = this.recursive_buildBlancedBSTFromSortedArr(arr);
    }

    recursive_buildBlancedBSTFromSortedArr(arr, start = 0, end = arr.length - 1) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const pNode = new Node(arr[mid]);
        pNode.left = this.recursive_buildBlancedBSTFromSortedArr(arr, start, mid - 1);
        pNode.right = this.recursive_buildBlancedBSTFromSortedArr(arr, mid + 1, end);

        return pNode;
    }

    insert_iterative(value) {
        let node = this.root;
        if (node === null) {
            this.root = new Node(value);
            return true;
        }
        
        while(node) {
            if (value < node.value) {
                if (node.left != null) {
                    node = node.left;
                } else {
                    node.left = new Node(value);
                    return true;
                }
            } else {
                if (node.right != null) {
                    node = node.right;
                } else {
                    node.right = new Node(value);
                    return true;
                }
            }
        }

    }

    delete_recursive(value, node = this.root, parent) {
        if (!node) {
            return;
        }

        if (value < node.value) {
            return this.delete_recursive(value, node.left, node);
        } else if (value > node.value) {
            return this.delete_recursive(value, node.right, node);
        } else {
            // node has 0 ~ 1 child
            if (!node.left) {
                if (parent && parent.left === node) {
                    parent.left = node.right;
                } else if (parent) {
                    parent.right = node.right;
                } else {
                    this.root = node.right;
                }
            } else if (!node.right) {
                if (parent && parent.left === node) {
                    parent.left = node.left;
                } else if (parent) {
                    parent.right = node.left;
                } else {
                    this.root = node.left;
                }
            } else { // node has 2 children
                const rightMinNode = this.findMinNode(node.right);
                this.delete_recursive(rightMinNode.value, node.right, node);
                node.value = rightMinNode.value
            }
        }
    }

    findMinNode(node) {
        while(node.left) {
            node = node.left;
        }

        return node;
    }

    traversal_inOrder() {
        const result = [];
        inOrder(this.root);
        console.log(result.toString());

        function inOrder(node) {
            if (!node) {
                return;
            }

            inOrder(node.left);
            result.push(node.value);
            inOrder(node.right);
        }
    }
}

const tree = new Tree();
tree.buildBalancedBSTFromSortedArr([1,2,3,4,5,6,7,8,9,10,11,12]);
tree.traversal_inOrder();
tree.insert_iterative(3.5);
tree.traversal_inOrder();
tree.delete_recursive(9);
tree.traversal_inOrder();