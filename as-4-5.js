const isStringUpperCase = (input) => {
    if (input.toLowerCase() === input.toUpperCase()) {
        return `${input} is not an alphabetic character`
    }
    if(input == input.toUpperCase()) {
        return true;
    }
    return false;
}

const convertUpperCaseToLowerCaseAndVS = (input) => {

    // O(n) time
    // O(n) space

    let output = '';
    for (let i = 0; i < input.length; i++) {
        // if(isStringUpperCase(input[i])){
        //     output += input[i].toLowerCase();
        // } else {
        //     output += input[i].toUpperCase();
        // }

        output += isStringUpperCase(input[i]) ? input[i].toLowerCase() : input[i].toUpperCase();

    }

    return output;;

}

let result = convertUpperCaseToLowerCaseAndVS('jASON')
console.log(result);
result = convertUpperCaseToLowerCaseAndVS('Ruby')
console.log(result);
