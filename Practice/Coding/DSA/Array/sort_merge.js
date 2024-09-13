/**
 * Merge Sort
 * The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.
 * 
 * How it works:
 * Divide the unsorted array into two sub-arrays, half the size of the original.
 * Continue to divide the sub-arrays as long as the current piece of the array has more than one element.
 * Merge two sub-arrays together by always putting the lowest value first.
 * Keep merging until there are no sub-arrays left.
 * 
 * T_O(nlog(n))
 * S_O(n)
 */

function solution1(arr) {
    return mergeSort(arr);

    function mergeSort(arr) {
        const n = arr.length;
        if (n <= 1) {
            return arr;
        }
    
        const mid = Math.floor(n / 2);
        const leftArr = mergeSort(arr.slice(0, mid));
        const rightArr = mergeSort(arr.slice(mid));
        return merge(leftArr,rightArr);
    }
    
    function merge(leftArr, rightArr) {
        let result = [], leftIdx = 0, rightIdx = 0;
        while(leftIdx < leftArr.length && rightIdx < rightArr.length) {
            if (leftArr[leftIdx] <= rightArr[rightIdx]) {
                result.push(leftArr[leftIdx++]);
            } else {
                result.push(rightArr[rightIdx++]);
            }
        }
    
        // concatenate any remaining elements
        return result.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx));
    }
}

// Non-recursive
function solution2(arr) {
    return mergeSort(arr);

    function mergeSort(arr) {
        const n = arr.length;
        for (let step = 1; step < n; step *= 2) {
            for (let leftStart = 0; leftStart < n - 1; leftStart += 2*step) {
                const mid = Math.min(leftStart + step - 1, n - 1);
                const rightEnd = Math.min(leftStart + 2 * step - 1, n - 1);
                merge(arr, leftStart, mid, rightEnd); 
            }
        }
        return arr;
    }

    function merge(arr, start, mid, end) {
        const merged = [];
        let i = start, j = mid + 1;
        while(i <= mid && j <= end) {
            if (arr[i] <= arr[j]) {
                merged.push(arr[i++])
            } else {
                merged.push(arr[j++])
            }
        }

        while(i <= mid) {
            merged.push(arr[i++])
        }

        while(j <= end) {
            merged.push(arr[j++])
        }

        for (let k = 0; k < merged.length; k++) {
            arr[start + k] = merged[k];
        }
    }
}


// console.log(solution1([12, 11, 13, 5, 6, 7]));
console.log(solution2([12, 11, 13, 5, 6, 7]));