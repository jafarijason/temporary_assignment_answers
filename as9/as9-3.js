let myPow = (x, n) => {

    // Time O(1)
    // Space O(1)
    return x ** n;
}

myPow = (x, n) => {
    // Time O(n)
    // Space O(1)

    if (n == 0) {
        return 1;
    }
    if (n > 0) {
        return x * myPow(x, n - 1)
    }
    return (1 / x) * myPow(x, n + 1)
}

myPow = (x, n) => {

    // Time O(log n)
    // space O(1)
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    const half = myPow(x, Math.floor(n / 2));

    return half * half * (n % 2 ? x : 1);
};

let result = myPow(2, 10);
console.log(result);

result = myPow(2.1, 3);
console.log(result);
result = myPow(2, -2);
console.log(result);
