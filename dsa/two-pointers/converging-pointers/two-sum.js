
// Input: arr[] = [10, 20, 35, 50], target =70

// Naive methods
function twoSum(arr, target) {
    let n = arr.length;

    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
    
        // For each element arr[i], check every
        // other element arr[j] that comes after it
        for (let j = i + 1; j < n; j++) {
        
            // Check if the sum of the current pair
            // equals the target
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    // If no pair is found after checking
    // all possibilities
    return false;
}

// TWO POINTER METHOD
function twoSumPointer(arr, target)
{
    // Sort the array
    let left = 0, right = arr.length - 1;
    // Iterate while left pointer is less than right
    while (left < right) {
        let sum = arr[left] + arr[right];

        // Check if the sum matches the target
        if (sum === target)
            return true;
        else if (sum < target)
            left++; // Move left pointer to the right
        else
            right--; // Move right pointer to the left
    }
    // If no pair is found
    return false;
}


let arr = [10, 20, 35, 50];
let target = 70;


// Call the twoSum function and print the result
if (twoSum(arr, target)) {
    console.log("true");
} else {
    console.log("false");
}

// Call the twoSum function and print the result
if (twoSumPointer(arr, target)) {
    console.log("true");
} else {
    console.log("false");
}