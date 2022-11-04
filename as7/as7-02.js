let processData;


processData = (input) => {
    // time O(n^2)
    // space O(n)
    const arrayOfInput = input.split(' ');
    let s1 = arrayOfInput[0];
    let s2 = arrayOfInput[1];

    if (s1.length !== s2.length) {
        console.log("Not Anagram")
        return;
    }
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                s2 = s2.slice(0, j) + s2.slice(j + 1);
                break;
            }
        }
    }
    if (s2.length == 0) {
        console.log("Anagram")
        return;
    }
    console.log("Not Anagram")
    return
};


processData = (input) => {
    // time O(n log n)
    // space O(n)
    const arrayOfInput = input.split(' ');
    const s1 = arrayOfInput[0];
    const s2 = arrayOfInput[1];

    if (s1.length != s2.length) {
        console.log("Not Anagram")
        return;
    }
    let arr1 = s1.split("").sort().join("");
    let arr2 = s2.split("").sort().join("");
    if (arr1 == arr2) {
        console.log("Anagram")
        return;
    }
    console.log("Not Anagram")
    return
}


processData = (input) => {
    // time O(n)
    // space O(n)
    const arrayOfInput = input.split(' ');

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    [...arrayOfInput[0]].forEach(item => {
        frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
    });

    [...arrayOfInput[1]].forEach(item => {
        frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
    });

    for (let key in frequencyCounter1) {

        if (!frequencyCounter2[key]) {
            console.log('Not Anagram');
            return;
        }

        if (frequencyCounter2[key] != frequencyCounter1[key]) {
            console.log('Not Anagram');
            return;
        }
    }

    console.log('Anagram');
    return;
}


processData('abc bca');