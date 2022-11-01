let maxAndSecondMax = (inputArr) => {

    let max = -Infinity;
    let secondMax = -Infinity;

    for(let i = 0; i < inputArr.length; i++) {
        const item = inputArr[i];;

        if(item > max){
            secondMax = max;
            max = item;
        }
    }


    return [max, secondMax]
}

const res1 = maxAndSecondMax([
    17,
    15,
    39,
    51,
    14,
    32,
    28,
])
console.log(res1)
