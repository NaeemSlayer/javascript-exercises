const removeFromArray = function(array, ...elementToRemove) {
    let newArray = [];
    for (let char of array) {
        if (!elementToRemove.includes(char)) {
            newArray.push(char)
        }
    }
    return newArray;
}
console.log(removeFromArray([1,2,3,4],3,2,1,4));;

// Do not edit below this line
module.exports = removeFromArray;
