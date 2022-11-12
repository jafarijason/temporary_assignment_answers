// Q1. 

// Write Javascript function called findDifferenceMaxAndMin to return the difference of the maximum and minimum values of given array of numbers 

// Hint 

// Time O(n)

// Space O(n)


// Sample input 

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]


// Output 11



// Sample input 

// [101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9]


// Output 5998.777


// const findDifferenceMaxAndMin = (arr) => {
//     // Your code must be here
// };


// let result = findDifferenceMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]);
// console.log(result);
// result = findDifferenceMaxAndMin([101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9]);
// console.log(result);


let findMinMax = (inputArr) => {
    let min = Infinity;
    let max = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < min) {
            min = inputArr[i];
        } else if (inputArr[i] > max) {
            max = inputArr[i];
        }
    }
    return [min, max];
};

const findDifferenceMaxAndMin = (arr) => {
    const result = findMinMax(arr);
    return result[1] - result[0];
};

let result = findDifferenceMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]);

console.log(result);

result = findDifferenceMaxAndMin([101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9]);

console.log(result);
