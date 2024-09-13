/**
 * Bubble Sort
 * 1. Iterate the whole array, if arr[i] > arr[i+1], swap the value
 * 2. Each time the remaining largest will be bubble to the right side
 * 
How it works:
Go through the array, one value at a time.
For each value, compare the value with the next value.
If the value is higher than the next one, swap the values so that the highest value comes last.
Go through the array as many times as there are values in the array.
 * 
 * T_O(n^2)
 * best ~= O(n)
 * S_O(1)
 */

function solution(nums) {
    for (let j = nums.length - 1; j >= 1; j--) {
        for (let i = 0; i < j; i++) {
            if (nums[i] > nums[i + 1]) {
                // Switch value
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }

    return nums;
}

// Early return if no swap happended
function solution1(arr) {
    let len = arr.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

console.log(solution([5, 3, 1, 4, 6]));
