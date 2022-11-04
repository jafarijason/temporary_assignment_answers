var containsDuplicate = function (nums) {
    // time O(n log n)
    // space O(n)
    // Two pointers
    const newArr = nums.sort();
    console.log(newArr);
    let start = 0;
    let next = 1;
    while (next < newArr.length) {
        if (newArr[start] === newArr[next]) {
            return true
        }
        start += 1;
        next += 1;
    }
    return false
};

let result = containsDuplicate([1, 2, 3, 1]);
// console.log(result);
// result = containsDuplicate([1, 2, 3, 4]);
// console.log(result);
// result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
// console.log(result);