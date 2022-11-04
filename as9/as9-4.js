let factorial = (num) => {
    // Time O(n)
    // Space O(1)
    if (num <= 1) {
        return 1;
    }
    return factorial(num - 1) * num
};

factorial = (num) => {
    // Time O(n)
    // Space O(1)
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

let result = factorial(3);
console.log(result);

