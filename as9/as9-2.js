let reverse = (str) => {

    //Time O(n)
    // Space O(n)
    const arr = str.split('');
    arr.reverse();
    return arr.join('')

}

reverse = (str) => {

    // Time O(n)
    // Space O(n)
    if(str.length <=1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0]
}

let result = reverse('awesome');
console.log(result);
result = reverse('rithmschool');
console.log(result);
