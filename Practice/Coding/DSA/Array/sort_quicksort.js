/**
 * Quick Sort
 * The Quicksort algorithm takes an array of values, 
 * chooses one of the values as the 'pivot' element, 
 * and moves the other values so that lower values are on the left of the pivot element, 
 * and higher values are on the right of it.
 * 
 * How it works:
 * Choose a value in the array to be the pivot element.
 * Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
 * Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
 * Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
 *
 * Each call of `partition` will move pivot number to it's position
 * partition -> T_O(n)
 * 
 * 
 * average T_O(nlog(n))
 * log(n) is because split to 2 quicksort call, 2*log(n) -> O(log(n))
 * worst T_O(n^2) -> arr already sorted
 */

function solution(arr) {
    return quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr, left, right) {
    const n = arr.length;
    if (left >= right) {
        return arr;
    }

    const partitionIdx = partition(arr, left, right);
    quicksort(arr, left, partitionIdx - 1);
    quicksort(arr, partitionIdx + 1, right);

    return arr;

    function partition(arr, left, right) {
        const pivot = arr[right];
        let partitionIdx = left;
        while(left < right) {
            if (arr[left] < pivot) {
                if (left != partitionIdx) {
                    [arr[left], arr[partitionIdx]] = [arr[partitionIdx], arr[left]];
                }
                partitionIdx++;
            }
            left++;
        }

        [arr[right], arr[partitionIdx]] = [arr[partitionIdx], arr[right]]

        return partitionIdx;
    }
}

console.log(solution([ 11, 9, 12, 7, 3]));
console.log(solution([ 4, 9, 5, 8, 3, 7]));

