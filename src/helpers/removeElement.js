export function removeDuplicates(array, result = []) {
    // let result = [];
    result = array.filter(function(element){
    return result.includes(element) ? '' : result.push(element)
    });
}