const isStringUpperCase = (input) => {
    if (input.toLowerCase() === input.toUpperCase()) {
        return `${input} is not an alphabetic character`
    }
    if(input == input.toUpperCase()) {
        return true;
    }
    return false;
}

let result = isStringUpperCase('p')
console.log(result);
result = isStringUpperCase('H')
console.log(result);
result = isStringUpperCase('9')
console.log(result);
result = isStringUpperCase('?')
console.log(result);