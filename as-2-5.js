
const numberOfDivisors = (input) => {
    let numberOfDivisorsRes = 0;
    for (let i = 1; i <= input  ; i++) {
        if (
            input % i == 0
        ) {
            numberOfDivisorsRes++;
        }
    }
    return numberOfDivisorsRes;
}


let maximumDivisorsAndCountOfDivisors = (inputArr) => {

    //O(n^2) time
    //O(n) space

    let result;
    let maxCountOfDivisors = -Infinity;

    inputArr.forEach((item) => {

        const numberOfDivisorsRes = numberOfDivisors(item);
        if(numberOfDivisorsRes > maxCountOfDivisors){
            maxCountOfDivisors = numberOfDivisorsRes;
            result = item;
        } else if(numberOfDivisorsRes == maxCountOfDivisors){
            result = Math.max(item, result);
        }

    });

    return [result, maxCountOfDivisors];
}

const res1 = maximumDivisorsAndCountOfDivisors([
    767,
    665,
    999,
    895,
    907,
    796,
    561,
    914,
    719,
    819,
    555,
    529,
    672,
    933,
    882,
    869,
    801,
    660,
    879,
    985,
])
console.log(res1)
