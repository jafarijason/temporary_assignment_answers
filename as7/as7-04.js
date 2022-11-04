// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram;
isAnagram = (s, t) => {

    // time O(n log n)
    // space O(n)
    return s.length === t.length
        && s.split('').sort().join('') === t.split('').sort().join('');
};


isAnagram = (s, t) => {

    // time O(n)
    // space O(n)

    if (s.length != t.length) return false;


    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    [...s].forEach(item => {
        frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
    });

    [...t].forEach(item => {
        frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
    });

    for (let key in frequencyCounter1) {

        if (!frequencyCounter2[key]) {
            return false;
        }

        if (frequencyCounter2[key] != frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
};


let result = isAnagram('anagram', 'nagaram');
console.log(result);
result = isAnagram('rat', 'car');
console.log(result);
