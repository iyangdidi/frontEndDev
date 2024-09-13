/**
 * Selection Sort
 * Finds the lowest value in an array and moves it to the front of the array.
 * 
 * How it works:
 * Go through the array to find the lowest value.
 * Move the lowest value to the front of the unsorted part of the array.
 * Go through the array again as many times as there are values in the array.
 * 
 * T_O(n^2)
 * > On average, about n/2 elements are compared to find the lowest value in each loop.
 * > T = O(n/2 * n) 
 * best ~= worst case
 */

function solution(arr) {
    // arr.length - 1 times will sort all numbers
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}

console.log(solution([5, 3, 1, 4, 6]));