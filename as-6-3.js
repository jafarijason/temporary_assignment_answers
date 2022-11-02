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


let palindromeIndex = (s) => {

    for (let i =0 ; i < Math.floor(s.length/ 2); i++){

        if(s[i] != s[s.length-i-1]){
            const stringA = s.slice(0, i) + s.slice(i + 1);
            const stringB = s.slice(0, s.length - 1 - i) + s.slice(s.length - i)
            if (isPalindrome(stringA)) return i;
            if (isPalindrome(stringB)) return s.length - 1 - i;
            return -1;
        }

    }
    return -1;
}

let result = palindromeIndex('aaab')
console.log(result)
result = palindromeIndex('baa')
console.log(result)
result = palindromeIndex('aaa')
console.log(result)