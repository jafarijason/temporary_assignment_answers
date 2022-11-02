
//  https://www.codingninjas.com/codestudio/problems/two-substrings_920397?leftPanelTab=2

let overlapABBA = (input) => {

    let firstOccurAB = input.length;
    let firstOccurBA = input.length;
    let lastOccurBA = -1;
    let lastOccurAB = -1;

    //Iterating through the characters of the string.
    for (let i = 1; i < input.length; i++) {

        if (input.charAt(i) == 'A' && input.charAt(i - 1) == 'B') {

            //Updating the first and last occurence of sub-string AB.
            lastOccurBA = Math.max(lastOccurBA, i - 1);
            firstOccurBA = Math.min(firstOccurBA, i);
        }

        if (input.charAt(i) == 'B' && input.charAt(i - 1) == 'A') {

            //Updating the first and last occurence of sub-string BA.
            lastOccurAB = Math.max(lastOccurAB, i - 1);
            firstOccurAB = Math.min(firstOccurAB, i);
        }
    }

    //If the last occurence of AB and first occurence of BA does not overlap return true.
    if (lastOccurAB != - 1 && firstOccurBA != input.length && lastOccurAB > firstOccurBA) {
        return true;
    }

    //If the last occurence of BA and first occurence of AB does not overlap return true.
    if (lastOccurBA != - 1 && firstOccurAB != input.length && lastOccurBA > firstOccurAB) {
        return true;
    }

    return false;
}
// O(n) time
// O(n) space



let result = overlapABBA('ABBA');
console.log(result);
result = overlapABBA('BAAB');
console.log(result);
result = overlapABBA('ABA');
console.log(result);
result = overlapABBA('ABHA');
console.log(result);