let findMinMax = (inputArr) => {

    // O(n) time
    // O(n) space
    let min = Infinity;
    let max = -Infinity;
    inputArr.forEach((item) => {
        if (item > max) {
            max = item;
        } else if (item < min) {
            min = item;
        }
    });


    return [min, max]
}

const res1 = findMinMax([
    17,
    15,
    39,
    51,
    14,
    32,
    28,
])
console.log(res1)
