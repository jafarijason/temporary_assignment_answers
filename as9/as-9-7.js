var sortArray = (nums) => {
    //time O(n^2)
    //space O(n)
    for (let i = 0; i < nums.length; i++) {
        let counter = nums[i], j;
        for (j = i - 1; j >= 0 && nums[j] > counter; j--) {
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = counter
    }
    return nums
};



////////
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

var sortArray = (nums) => {
    //time O(n^2)
    //space O(n)
    return bubbleSort(nums);
};


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}
var sortArray = (nums) => {
    //time O(n^2)
    //space O(n)
    return selectionSort(nums);
};

function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
var sortArray = (nums) => {
    //time O(n^2)
    //space O(n)
    return insertionSort(nums);
};

/////////////////
// Best Answer
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

var sortArray = (nums) => {
    //time O(n log n)
    //space O(n)
    return mergeSort(nums);
};




const result = sortArray([5, 2, 3, 1]);

console.log(result);