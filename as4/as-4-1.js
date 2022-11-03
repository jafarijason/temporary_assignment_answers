const stingConvertor = (input) => {
    //O(time of regex) time
    // O(n) time for normal
    // O(n) space
    let output = '';

    input = input.toLowerCase();
    input = input.replaceAll('a', '');
    input = input.replaceAll('e', '');
    input = input.replaceAll('i', '');
    input = input.replaceAll('o', '');
    input = input.replaceAll('u', '');
    // input = input.replace(/[aeiou]/gi, '');

    for (let i = 0; i < input.length; i++) {
        output += '.' + input[i];
    }

    return output;
    // return input;
};


let result = stingConvertor('aBAcAba');
console.log(result);
result = stingConvertor('aBAcAba');
console.log(result);