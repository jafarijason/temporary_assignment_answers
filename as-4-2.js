const stingConvertor = (input) => {

    // O(n long n) time
    // O(n) space

    input = input.replaceAll('+', '');
    const sampleArr = input.split('');
    // const sampleArr = [...input];

    // merge sort O( n long n )
    sampleArr.sort();

    const result = sampleArr.join('+')

    // let result = '';
    // sampleArr.forEach((item) => {
    //     result += item + '+';
    // });
    // result = result.slice(0, -1);
    return result;



};


let result = stingConvertor('1+1+3+1+3+2+3');
console.log(result);
