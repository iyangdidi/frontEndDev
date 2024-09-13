
/**
 * Counting Sort
 * 1. only works for non negative integer values
 * 2. if the numbers to be sorted varies a lot in value (large k), and there are few numbers to sort (small n), the Counting Sort algorithm is not effective.
 * 
 * T_O(n+k)
 * `n`, arr length
 * `k`, max num to sort in arr
 * S_O(k)
 * 
 */


function solution(arr) {
    const k = Math.max(...arr);
    const countArr = new Array(k+1).fill(0);
    for (const num of arr) {
        countArr[num]++;
    }

    let j = 0;
    for (let i; i <= k; i++) {
        let count = countArr[i]
        while(count > 0) {
            arr[j] = i;
            j++;
            count--;
        }
    }
    return arr
}

