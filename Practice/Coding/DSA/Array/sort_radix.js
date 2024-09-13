/**
 * Radix Sort
 * Radix Sort is a non comparative algorithm that only works with non negative integers.
 * Radix Sort uses the radix so that decimal values are put into 10 different buckets (or containers) corresponding to the digit that is in focus, then put back into the array before moving on to the next digit.
 * 
 * Radix Sort must sort the elements in a stable way for the result to be sorted correctly.
 * 
 * How it works:
 * Start with the least significant digit (rightmost digit).
 * Sort the values based on the digit in focus by first putting the values in the correct bucket based on the digit in focus, and then put them back into array in the correct order.
 * Move to the next digit, and sort again, like in the step above, until there are no digits left.
 */

function solution(arr) {
    const radixBase = 10;
    const maxNum = Math.max(...arr);
    let significantDigit = 1;

    while(Math.floor((maxNum / significantDigit)) > 0) {
        const buckets = Array.from({length: radixBase}, () => []);
        arr.forEach((num) => {
            const digit = Math.floor((num / significantDigit)) % radixBase;
            buckets[digit].push(num);
        })
        arr = buckets.flat();
        significantDigit *= radixBase;
    }
    return arr;
}

console.log(solution([170, 45, 75, 90, 802, 24, 2, 66]));