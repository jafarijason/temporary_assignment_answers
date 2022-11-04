let sameFrequency;

sameFrequency = (num1, num2) => {

    // time O(n^2)
    // space O(n)
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;
    for (let i = 0; i < strNum1.length; i++) {
        for (let j = 0; j < strNum2.length; j++) {
            if (strNum1[i] == strNum2[j]) {
                strNum2 = strNum2.slice(0, j) + strNum2.slice(j + 1);
                break;
            }
        }
    }
    if (strNum2.length == 0) {
        return true;
    }
    return false;
}


sameFrequency = (num1, num2) => {

    // time O(n log n)
    // space O(n)
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let arrStr1 = strNum1.split("").sort().join("");
    let arrStr2 = strNum2.split("").sort().join("");
    if (arrStr1 == arrStr2) {
        return true;
    }
    return false;
}


sameFrequency = (num1, num2) => {

    // time O(n)
    // space O(n)
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }
    return true;
}


let result
// result = sameFrequency(182, 281);
// console.log(result);
// result = sameFrequency(34, 14);
// console.log(result);
result = sameFrequency(3589578, 5879385);
console.log(result);
// result = sameFrequency(22, 222);
// console.log(result);
