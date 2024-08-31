export default function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > curValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curValue;
    }

    return arr;
}
