function reverseString(string) {
    let charArray = string.split("");
    let start = 0;
    let end = charArray.length - 1;
    while (start < end) {
        console.log("Start is %s and End is %s ", start, end)
        swap(charArray, start, end);
        start += 1;
        end -= 1;
    }
    return charArray.join("");
}

function swap(charArray, start, end) {
    // using destructuring assignment to swap the characters
    [charArray[start], charArray[end]] = [charArray[end], charArray[start]];
}

console.log('Reverse string ', reverseString("ABCD"));