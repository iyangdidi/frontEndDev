/**
 * Time Complexity:
 * binarySearch1: O(log n)
 * binarySearch2: O(log n)
 *
 * Space Complexity:
 * binarySearch1: O(log n)
 *   due to the recursive call stack.
 *   Each recursive call adds a new layer to the call stack, and since the problem size is halved with each call, there will be a maximum of log n calls in the stack.
 * binarySearch2: O(1)
 */

function binary(arr, target, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return -1;
    }

    const midIndex = Math.round((startIndex + endIndex) / 2);
    const current = arr[midIndex];
    if (current === target) {
        return midIndex;
    } else if (current < target) {
        return binary(arr, target, midIndex + 1, endIndex);
    } else {
        return binary(arr, target, startIndex, midIndex - 1);
    }
}

function binarySearch1(arr, target, startIndex, endIndex) {
    return binary(arr, target, 0, arr.length - 1);
}

function binarySearch2(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.round((right + left) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
