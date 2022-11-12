// Q2.

// You are given a 0-indexed integer array nums and a target element target.

// Write a javascript function to do following steps:

// Remove all repetitions from  array  // Time O(n)
// sort that array with merge sort approach // Time O(n log n)
// find the target index with binary search approach // Time O(logn)
// return index of target

// Sample input 

// ([1, 2, 5, 2, 3], 2)

// Output 1

// Sample input 

// ([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], 9)

// Output 8

// Sample input 

// ([101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9], 697.77)

// Output 6


function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (
        i < arr1.length
        && j < arr2.length
    ) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}


var findTargetFromUniqueSortedArray = function (arrayOfNumbers, target) {

    const newArrayOfNumbers = [...new Set(arrayOfNumbers)];

    const sortedArray = mergeSort(newArrayOfNumbers);

    const result = binarySearch(sortedArray, target);

    return result;
};


let result = findTargetFromUniqueSortedArray([1, 2, 5, 2, 3], 2);

console.log(result);

result = findTargetFromUniqueSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], 9);

console.log(result);

result = findTargetFromUniqueSortedArray([101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9], 697.77);

console.log(result);

