const isStringUpperCase = (input) => {
    if (input.toLowerCase() === input.toUpperCase()) {
        return `${input} is not an alphabetic character`
    }
    if (input == input.toUpperCase()) {
        return true;
    }
    return false;
}

const normalizeText = (input) => {

    let countOfLowerCase = 0;
    let countOfUpperCase = 0;

    for (let i = 0; i < input.length; i++) {
        if (isStringUpperCase(input[i])) {
            countOfUpperCase++;
        } else {
            countOfLowerCase++;
        }
    }

    if (countOfUpperCase > countOfLowerCase) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}

let result = normalizeText('CONGraTUlatION')
console.log(result);
result = normalizeText('DOCument')
console.log(result);
result = normalizeText('strING')
console.log(result);
