export function getUnique(arr) {
    let myArrayWithNoDuplicates = myArray.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
        accumulator.push(element)
    }
    return accumulator
    }, [])
return myArrayWithNoDuplicates
}