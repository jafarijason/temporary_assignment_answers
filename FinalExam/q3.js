// Q3.
// Greatest common divider and Prime decomposition

// Refer to this link,

// The greatest common divider is the greatest integer that divides two other integers without remainder. For instance, the greatest common divider of 14 and 28 is 14, as 14 is the greatest number that divides both 14 and 28.

// Also refer to this link,

// The prime decomposition of a number is defined as a list of prime numbers which when all multiplied together, are equal to that number.

// And prime factor is a unique members of  prime decomposition.

// Write a javascript function to do following steps:

// find gdc (Greatest common divider) of two numbers // Time O(n) (8 score)
// decompose found number (gdc you found for step 1) to prime roots and save it in a unique array // Time O(n^2) (8 score)
// retrun a object that contain a key gdcValue , value of gdc and key primeFactorArray, value of section2 // Time O(1) (4 score) 

// Sample input 

// 14, 28

// Output { gdcValue: 14, primeFactorArray: [ 2, 7 ] }

// Sample input 

// 35, 15

// Output { gdcValue: 5, primeFactorArray: [ 5 ] }

// Sample input 

// 100, 180

// Output { gdcValue: 20, primeFactorArray: [ 2, 5 ] }


let findGcd = (number1, number2) => {
    let divisors;

    for (var i = 1; i <= number1; i++) {
        if ((number1 % i == 0) && (number2 % i == 0)) {
            divisors = i;
        }
    }

    return divisors
};


const isPrimeFunc = (input) => {
    let isPrime = true;
    for (let i = 2; i < (input - 1); i++) {
        if (input % i == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

function prime_factors(num) {
    const resultSet = new Set();
    for (let i = 2; i <= num; i++) {
        if (
            isPrimeFunc(i)
            && num % i === 0
        ) {
            resultSet.add(i)
            num /= i;
        }
    }
    return [...resultSet];
}

let findGcdAndDecomposeToPrimeFactors = (number1, number2) => {

    const gdcValue = findGcd(number1, number2)

    const primeFactorArray = prime_factors(gdcValue);

    return {
        gdcValue: gdcValue,
        primeFactorArray: primeFactorArray
    };

};



let result = findGcdAndDecomposeToPrimeFactors(14, 28);

console.log(result);

result = findGcdAndDecomposeToPrimeFactors(35, 15);

console.log(result);

result = findGcdAndDecomposeToPrimeFactors(100, 180);

console.log(result);