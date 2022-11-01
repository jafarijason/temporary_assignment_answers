let simpleArraySum = (ar) => {
    // O(n) time
    // O(n) space
    let sum = 0;
    ar.forEach((item) => {
        sum += item;
    });



    return sum;
}


simpleArraySum = (ar) => {
    // O(n) time
    // O(n) space
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}


simpleArraySum = (ar) => {
    // O(n) time
    // O(n) space
    const sum = ar.reduce((prevVal, currVal) => {
        return prevVal + currVal;
    });

    return sum;
}

// O(n)


const result = simpleArraySum([
    3,
    3,
    3,
    3,
    3,
    1,
    0,
    0,
    0,
    0,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    0,
    0,
    1,
    3,
    3,
    1,
    0,
    0,
    1,
    3,
    3,
    1,
    0
])

console.log(result);