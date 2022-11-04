let fib = (n) => {

    // time O(n)
    // Space O(1)
    if (n == 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};

fib = (n) => {
    // O(n) time
    // O(1) space
    if (n == 0) return 0;
    let x = 1;
    let result = 0;
    let lastFib;
    for (let i = 1; i <= n; i++) {
        lastFib = x;
        x = x + result;
        result = lastFib
    }
    return result;
}

// fib(0) // 0

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

let result = fib(0)
console.log(result);
result = fib(1)
console.log(result);
result = fib(2)
console.log(result);
result = fib(4)
console.log(result);
result = fib(10)
console.log(result);
result = fib(28)
console.log(result);
result = fib(35)
console.log(result);
result = fib(20000)
console.log(result);
