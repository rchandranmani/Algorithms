

function binarySearch(arr, searchNum) {
let start = 0;
let end = (arr.length) - 1;

while (start <= end) {

    let middle = Math.floor( start + (end- start)/2);

    if (arr[middle] === searchNum){
        return middle;
    } else if (arr[middle] < searchNum){
        start = middle+1;
    } else {
        end = middle -1;
    }
    }
    return -1;
}

console.log('Binary Search return ', binarySearch([1, 5, 8, 12, 16, 23, 28, 31, 33], 31)) ;



