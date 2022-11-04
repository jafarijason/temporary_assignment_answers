var smallerNumbersThanCurrent = function (nums) {

    // Time O(n ^ 2)
    // Space O(n)
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++;
            }
        }
        arr.push(counter);
    }
    return arr;
}

smallerNumbersThanCurrent = function (nums) {
    // Time O(n ^ 2)
    // Space O(n)
    // const newArray =[...nums];
    const newArray = nums.slice();
     // Time O(n ^ 2)
    newArray.sort((a, b) => { return a - b });
    const arr = [];
     // Time O(n ^ 2)
    for(let i = 0; i < newArray.length; i++) {
        const indexOfValue = newArray.indexOf(nums[i]);
        arr.push(indexOfValue)
    }
    return arr;
}

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(
        i < arr1.length
        && j < arr2.length
    ){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
smallerNumbersThanCurrent = function (nums) {
    // Time O(n^2)
    // Space O(n)
    let sorted = mergeSort(nums.slice());
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(sorted.indexOf(nums[i]));
    }
    return result;
};


const result = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
console.log(result);
