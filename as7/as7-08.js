/**
 * @param {number} c
 * @return {boolean}
 */

// Multiple Pointes
var judgeSquareSum = function (c) {
    // O(n) time
    // O(1) spaces


    let left = 0;
    let right = parseInt(Math.sqrt(c));

    while (left <= right) {
        const x = left * left + right * right
        if (x == c) {
            return true;
        } else if (x < c) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return false;


};

judgeSquareSum = function (c) {
    // O(n) time
    // O(n) spaces
    const sqSet = new Set();

    for (let i = 0; i < parseInt(Math.sqrt(c)) + 1; i++) {
        sqSet.add(i * i);
    }

    for (const sq of sqSet) {
        if (sqSet.has(c - sq)) {
            return true;
        }
    }
    return false;

};
//

judgeSquareSum = function (c) {
    // time O(n)
    // space O(1)
    for (let i = 0; i < parseInt(Math.sqrt(c)) + 1; i++) {
        const y = c - (i * i);

        if ((parseInt(Math.sqrt(y)) * parseInt(Math.sqrt(y))) == y) {
            return true;
        }
    }
    return false;
};


let result = judgeSquareSum(5);
console.log(result);

result = judgeSquareSum(3);
console.log(result);
