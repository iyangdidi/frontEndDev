/**
 * Insertion Sort
 * uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.
 * 
 * How it works:
 * Take the first value from the unsorted part of the array.
 * Move the value into the correct place in the sorted part of the array.
 * Go through the unsorted part of the array again as many times as there are values.
 * 
 *  T_O(n^2)
 */

function solution(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) { // index for unsorted part
        let j = i; // j - 1 = last index for sorted part
        while(j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }

    return arr;
}

console.log(solution([5, 3, 1, 4, 6]));