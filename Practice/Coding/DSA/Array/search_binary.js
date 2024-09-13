/**
 * 
 * T_O(log(n))
 */

function solution(arr, target) {

    return binarySearch(arr, target);

    function binarySearch(arr, target) {
        const n = arr.length;
        let left = 0, right = n - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

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
}

console.log(solution([1, 3, 5, 7, 8, 9], 5));