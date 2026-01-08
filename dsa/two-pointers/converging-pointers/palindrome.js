let str = "racecar";

let strarray = str.split("");

let left = 0;
let right = strarray.length - 1;

let isPalindrome = true;

while (left < right) {
    if (strarray[left] !== strarray[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

if (isPalindrome) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}

