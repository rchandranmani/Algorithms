// Move zeros to the end
const arr = [1, 3, 0, 5, 0, 3, 9, 12, 0];

let left = 0;
for (let right = 0; right < arr.length; right++) {
  if (arr[right] !== 0) {
    // Avoid an unnecessary swap when left === right
    if (left !== right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
    }
    left++;
  }
}

console.log('Final array', arr);