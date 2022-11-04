// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences;

uniqueOccurrences = (arr) => {
    // time O(n^2)
    // space O(n)

    let sorted = arr.sort((a, b) => a - b);
    let lastNum = sorted[0];
    let count = 1;
    let counts = new Set();
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] == lastNum) {
            count++;
        } else {
            if (counts.has(count)) {
                return false;
            }
            counts.add(count);
            count = 1;
            lastNum = sorted[i];
        }
    }
    if (counts.has(count)) {
        return false;
    }
    return true;
};

uniqueOccurrences = (arr) => {
    // time O(n)
    // space O(n)

    let frequencyCounter = {};
    arr.forEach(item => {
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    });

    const outputArray = Object.values(frequencyCounter);

    if (outputArray.length != new Set(outputArray).size) {
        return false;
    }

    return true;
};

uniqueOccurrences = (arr) => {
    // time O(n)
    // space O(n)

    let frequencyCounter = new Map()
    arr.forEach((item) => {
        const val = frequencyCounter.has(item) ? (frequencyCounter.get(item) + 1) : 1;
        frequencyCounter.set(item, val)
    })
    return new Set(frequencyCounter.values()).size === frequencyCounter.size
};



let result = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
console.log(result)
result = uniqueOccurrences([1, 2]);
console.log(result)
result = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);
console.log(result)