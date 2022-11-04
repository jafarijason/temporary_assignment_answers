var sortPeople = function (names, heights) {
    const items = names.map((name, i) => [name, heights[i]])
    // time O(n^2)
    // space O(n^2)
    items.sort((A, B) => B[1] - A[1])
    return items.map(A => A[0])
};


sortPeople = function (names, heights) {

    // time O(n^2)
    // space O(n^2)
    if (names.length === 1) return names
    let nameHeightMatrix = []
    let result = []

    for (let i = 0; i < names.length; i++) {
        nameHeightMatrix.push([names[i], heights[i]])
    }

    nameHeightMatrix.sort((a, b) => b[1] - a[1])

    for (let [name, height] of nameHeightMatrix) {
        result.push(name)
    }

    return result
};

sortPeople = function (names, heights) {
    // time O(n^2)
    // space O(n^2)
    let output = []

    // let's concatenate the arrays to sort later
    for (let i in heights) {
        output.push({ name: names[i], height: heights[i] })
    }

    return output
        .sort((a, b) => b.height - a.height) // sort
        .map(i => i.name) // cut needed
};

const result = sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
console.log(result);