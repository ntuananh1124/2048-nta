import { colNumber, data, rowNumber, gap, blockSize } from "../constant"
import { randomNumber } from "../helpers/randomNumber";
import { removeDuplicates } from "../helpers/removeElement";
import { takeDuplicateElement } from "../helpers/takeDuplicate";

export default function createNewBlock(state = data, action) {
    let newState = [...state];
    // console.log(state);
    switch (action.type) {
        case "CREATE_NEW_BLOCK":
            let newBlock = {
                value: 2,
                color: "",
                textColor: "",
                x: 0,
                y: 0
            }
            // tim vi tri con trong:
            newState = [
                ...newState,
                {
                    value: 2,
                    color: "",
                    textColor: "",
                    x: colNumber(randomNumber(1,4)),
                    y: rowNumber(randomNumber(1,4))
                },
            ]
            return newState
        case "LEFT":
            for (const item of newState) {
                if (item.x !== 0) {
                    item.x-=(blockSize.width + gap)
                }
                console.log(`value: ${item.value}, x: ${item.x}, y: ${item.y}`);
            }
            return newState 
        case "RIGHT":
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].x !== 225) {
                    newState[i].x+=(blockSize.width + gap)
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            return newState 
        case "UP":
            // const finalData = [];
            // let finalResult = [];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].y !== 0) {
                    newState[i].y-=(blockSize.width + gap)
                    // const result = takeDuplicateElement(newState, newState.length);
                    // console.log(result);
                    // finalData.push(...result)
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            // finalResult = finalData.filter((ele) => finalResult.includes(ele) ? '' : finalResult.push(ele));
            // function removeItemAll(arr, value) {
            //     var i = 0;
            //     while (i < arr.length) {
            //     if (arr[i] === value) {
            //         arr.splice(i, 1);
            //     } else {
            //         ++i;
            //     }
            //     }
            //     return arr;
            // }
            // for (let i = 0; i < finalResult.length; i++) {
            //     finalResult[i].value*=2;
            // }
            // console.log(finalResult);
            // console.log("up", newState);
            return newState 
        case "DOWN":
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].y !== 225) {
                    newState[i].y+=(blockSize.width + gap)
                    // for (let j = i + 1; j < newState.length - 1; j++) {
                    //     if (newState[i].value === newState[j].value) {
                    //         newState[i].value*=2;
                    //         removeElement(newState, newState[i].value)
                    //     }
                    // }
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            console.log(newState);
            for (let i = 0; i < newState.length - 1; i++) {
                for (let j = i + 1; j < newState.length; j++) {
                    if (newState[i].x === newState[j].x && newState[i].y === newState[j].y) {
                        console.log(`x: ${newState[i].x}, y: ${newState[j].y}`);
                    }
                }
            }
            // console.log(newState);
            return newState 
        case "UPDATE_VALUE":
            // const newArray = newState.filter((item) => item.x !== action.data.x && item.y !== action.data.y);
            // newArray.push(
            //     ...newState,
            // )
            // console.log(newArray);
            // return newArray
            break;
        default:
            return state
    }
}