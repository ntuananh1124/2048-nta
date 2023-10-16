export function takeDuplicateElement(array, size){
    let result = [];
    let count = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i].value === array[j].value) {
                /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/
                result[count] = array[i];
                ++ count;
            }
        }
    }
    return result
}

export function takeDuplicate(array, size) {
    let result = [];
    let count = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i].x === array[j].x && array[i].y === array[j].y) {
                /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/
                result[count] = array[i];
                ++ count;
            }
        }
    }
    return result
}