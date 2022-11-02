const isPalindrome = (input) => {

    input = input.toLowerCase();
    // input = input.trim();
    input = input.replaceAll(' ', '');
    input = input.replace(/[^a-z0-9 -]/gi, '');

    const halfOfLength = Math.floor(input.length / 2);
    let answer = true;

    for (let i = 0; i < halfOfLength; i++) {
        if(input[i] != input[input.length - i -1]) {
            answer = false;;
            break;
        }
    }

    return answer;
}

const checkIfNumberIsPalindrome = (input) => {

    return isPalindrome(String(input));

}

let result = checkIfNumberIsPalindrome(151)
console.log(result)
result = checkIfNumberIsPalindrome(22)
console.log(result)
result = checkIfNumberIsPalindrome(-22)
console.log(result)
result = checkIfNumberIsPalindrome(75257)
console.log(result)
result = checkIfNumberIsPalindrome(9257823)
console.log(result) 