const stingConvertor = (input) => {

    // O(n) time
    // O(n) space

    let output = 'NO';

    // const lookUp = 'hello';
    const lookUp = ['h', 'e', 'l', 'l', 'o'];
    let lookUpIndex = 0;

    for (let i = 0; i < input.length; i++) {

        if (lookUpIndex == lookUp.length) {
            output = 'YES';
            break;
        }
        if (
            input[i] == lookUp[lookUpIndex]
        ) {
            lookUpIndex++;
        }
    }
    return output;
};


let result = stingConvertor('ahhellllloou');
console.log(result);
result = stingConvertor('hlelo');
console.log(result);
