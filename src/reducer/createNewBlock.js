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
            for (let i = 0;i < newState.length; i++) {
                if (newState[i].x !== 0) {
                    if (!newState.includes(item => item.x === 0)) {
                        newState[i].x = 0
                    }
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            for (let i = 0; i < newState.length - 1; i++) {
                for (let j = i + 1; j < newState.length; j++) {
                    if (newState[i].value === newState[j].value) {
                        // console.log(`x: ${newState[i].x}, y: ${newState[j].y}`);
                        if (newState[i].x === newState[j].x || newState[i].y === newState[j].y) {
                            newState[i].value *= 2
                            // console.log(newState[i]);
                            // console.log("new state: ",newState);
                        }
                    }
                    // else
                }
            }
            return newState 
        case "RIGHT":
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].x !== (blockSize.width + gap)*3) {
                    newState[i].x = (blockSize.width + gap)*3
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            for (let i = 0; i < newState.length - 1; i++) {
                for (let j = i + 1; j < newState.length; j++) {
                    if (newState[i].value === newState[j].value) {
                        // console.log(`x: ${newState[i].x}, y: ${newState[j].y}`);
                        if (newState[i].x === newState[j].x || newState[i].y === newState[j].y) {
                            newState[i].value *= 2
                            // console.log(newState[i]);
                            // console.log("new state: ",newState);
                        }
                    }
                    // else
                }
            }
            return newState 
        case "UP":
            // const finalData = [];
            // let finalResult = [];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].y !== 0) {
                    if (!newState.includes(item => item.y === 0)) {
                        newState[i].y = 0
                    }
                    // const result = takeDuplicateElement(newState, newState.length);
                    // console.log(result);
                    // finalData.push(...result)
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            for (let i = 0; i < newState.length - 1; i++) {
                for (let j = i + 1; j < newState.length; j++) {
                    if (newState[i].value === newState[j].value) {
                        // console.log(`x: ${newState[i].x}, y: ${newState[j].y}`);
                        if (newState[i].x === newState[j].x || newState[i].y === newState[j].y) {
                            newState[i].value *= 2
                            // console.log(newState[i]);
                            // console.log("new state: ",newState);
                        }
                    }
                    // else
                }
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
                if (newState[i].y !== (blockSize.width + gap)*3) {
                    if (!newState.includes(item => item.y === (blockSize.width + gap)*3)) {
                        // console.log("co");
                        newState[i].y = (blockSize.width + gap)*3
                    }
                    // newState[i].y+=(blockSize.width + gap)
                    // for (let j = i + 1; j < newState.length - 1; j++) {
                    //     if (newState[i].value === newState[j].value) {
                    //         newState[i].value*=2;
                    //         removeElement(newState, newState[i].value)
                    //     }
                    // }
                }
                console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            for (let i = 0; i < newState.length - 1; i++) {
                for (let j = i + 1; j < newState.length; j++) {
                    if (newState[i].value === newState[j].value) {
                        // console.log(`x: ${newState[i].x}, y: ${newState[j].y}`);
                        newState[i].value *= 2
                        console.log(newState[i]);
                        console.log("new state: ",newState);
                    }
                    // else
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