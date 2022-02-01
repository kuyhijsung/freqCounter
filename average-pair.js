// add whatever parameters you deem necessary
function averagePair(arr, num) {
    let start = 0; // left pointer
    let end = arr.length - 1; // right pointer

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}