/**
 * 
 */

function BSTSearch(treeArr, target) {
    const n = treeArr.length;
    let nodeIdx = 0;

    while(nodeIdx < n) {
        if (treeArr[nodeIdx] === target) {
            return nodeIdx;
        }

        const leftChildIdx = 2 * nodeIdx + 1;
        const rightChildIdx = 2 * nodeIdx + 2;

        nodeIdx = target > treeArr[nodeIdx] ? rightChildIdx: leftChildIdx;
    }

    return -1;
}

const treeArr = [13, 7, 15, 3, 8, 14, 19, null, null, null, null, null, null, 18];
let idx = BSTSearch(treeArr, 18);
console.log(idx); // 13
idx = BSTSearch(treeArr, 14);
console.log(idx); // 5
