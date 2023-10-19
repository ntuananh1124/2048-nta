export function removeDuplicates(array) {
    let result = [];
    result = array.filter(function(element){
    return result.includes(element) ? '' : result.push(element)
    });
}
export const updateArray = (array = []) => {
    array.filter(item => {
        return array.includes(item) ? '' : array.push(item)
    })
    return array
}