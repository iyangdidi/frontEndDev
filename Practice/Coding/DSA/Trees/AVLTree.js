class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    rightRotate(node) {
        // perform rotation
        const pivot = node.left;
        pivot.right = node;
        node.left = pivot.right;

        // update height
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;

        return pivot;
    }

    leftRotate(node) {
        // perform rotation
        const pivot = node.right;
        pivot.left = node;
        node.right = pivot.left;

        // update height;
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;

        return pivot;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node = this.root, value) {
        if(!node) {
            return new AVLNode(value);
        }

        // recursive insert
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node;
        }

        // update height
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // adjust tree
        const balance = this.getBalanceFactor(node);
        // LL
        if (balance > 1 && value < node.left.value) {
            this.rightRotate(node);
        }
        // RR
        if (balance < -1 && value > node.right.value) {
            this.leftRotate(node);
        }
        // LR
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            this.rightRotate(node);
        }
        // RL
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.left);
            this.leftRotate(node);
        }

        return node;
    }

    deleteNode(node = this.root, value) {
        if(!node) {
            return node;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.left, value);
        } else {
            // with 0~1 child
            if (node.left === null || node.right === null) {
                return node.left ? node.left : node.right;
            } else { // with 2 children
                // find right min
                let minMode = node.right;
                while(minMode.left) {
                    minMode = minMode.left;
                }
                // move min node value to the node to be delete
                node.value = minMode.value;
                // delete the min node
                node.right = this.deleteNode(node.right, minMode.value);
            }
        }

        if (!node) {
            return node;
        }

        this.adjustTree(node);
    }

    adjustTree(node) {
        // Update height of the current node
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // Check for balance factor and perform rotations if needed
        const balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rightRotate(node);
        }

        // Left Right Case
        if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.leftRotate(node);
        }

        // Right Left Case
        if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
}