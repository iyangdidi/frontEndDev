/**
 * Q(log(n))
 */

function heapMaxSort(arr) {
    const size = arr.length;

    // Build the init max heap
    for (let i = Math.round(size / 2 - 1); i > -1; i--) {
        heapify(arr, size, i);
    }

    // Get the biggest num each time, Swip the max to arry end
    // Adjust the heap iterately
    for (let i = size - 1; i > -1; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, size, parentIdx) {
    const lefIdx = parentIdx * 2 + 1;
    const rightIdx = parentIdx * 2 + 2;

    let largestIdx = parentIdx;

    if (lefIdx < size && arr[largestIdx] < arr[lefIdx]) {
        largestIdx = lefIdx;
    }

    if (rightIdx < size && arr[largestIdx] < arr[rightIdx]) {
        largestIdx = rightIdx;
    }

    if (largestIdx != parentIdx) {
        [arr[parentIdx], arr[largestIdx]] = [arr[largestIdx], arr[parentIdx]];

        heapify(arr, size, largestIdx);
    }
}

export default heapMaxSort;
