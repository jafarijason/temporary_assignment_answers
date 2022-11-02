const checkABBA = (input) => {
    let position = input.search('AB');
    if (position < 0) {
        return false;
    }
    input = input.slice(position+2);
    position = input.search('BA');
    if (position < 0) {
        return false;
    }
    return true;
}

const checkBAAB = (input) => {
    let position = input.search('BA');
    if (position < 0) {
        return false;
    }
    input = input.slice(position+2);
    position = input.search('AB');
    if (position < 0) {
        return false;
    }
    return true;
}

let overlapABBA = (input) => {

    const check1 = checkABBA(input);
    if(check1 ){
        return true;
    }
    const check2 = checkBAAB(input);
    if(check2){
        return true;
    }
    return false;;
};


let result = overlapABBA('ABBA');
console.log(result);
result = overlapABBA('BAAB');
console.log(result);
result = overlapABBA('ABA');
console.log(result);
result = overlapABBA('ABHA');
console.log(result);