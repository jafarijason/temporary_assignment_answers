// https://leetcode.com/problems/contains-duplicate/

//Frequency Counter

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate;

containsDuplicate = (nums) => {
    // time O(n^2)
    // space O(n)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] === nums[j + 1]) {
                return true;
            }
        }
    }
    return false;
};

containsDuplicate = (nums) => {
    // time O(n^2)
    // space O(n)
    if (nums.length < 1) {
        return false;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] === nums[j]) {
                return true;
            }
            j++;
        }
    }
    return false;
};


containsDuplicate = (nums) => {
    // time O(n log n)
    // space O(n)
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
};



containsDuplicate = (nums) => {
    // time O(n)
    // space O(n)
    let collection = {}
    for (let val in nums) {
        collection[nums[val]] = (collection[nums[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
};

containsDuplicate = (nums) => {
    // time O(n)
    // space O(n)
    let collection = {}
    for (const item of nums) {
        collection[item] = (collection[item] || 0) + 1
        if (collection[item] > 1) return true
    }
    return false;
};

containsDuplicate = (nums) => {
    // time O(n)
    // space O(n)
    let found = new Set(nums);
    return found.size !== nums.length;
};


let result = containsDuplicate([1, 2, 3, 1]);
console.log(result);
result = containsDuplicate([1, 2, 3, 4]);
console.log(result);
result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(result);
