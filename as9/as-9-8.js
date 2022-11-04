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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {

    const sortedArray = mergeSort(nums);

    const result = [];

    sortedArray.forEach((item, index) => {
        if (target == item) {
            result.push(index)
        }
    });

    return result;
};


const result = targetIndices([1, 2, 5, 2, 3], 2);

console.log(result);