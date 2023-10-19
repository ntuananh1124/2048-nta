import { colNumber, data, rowNumber, gap, blockSize } from "../constant"
import { random2Number, randomNumber } from "../helpers/randomNumber";
import { removeDuplicates, updateArray } from "../helpers/removeElement";
import { takeDuplicateElement } from "../helpers/takeDuplicate";

export default function createNewBlock(state = data, action) {
    let newState = [...state];
    // console.log(state);
    switch (action.type) {
        case "CREATE_NEW_BLOCK":
            // tim vi tri con trong:
            let newBlock = {
                value: random2Number(2,4),
                color: "",
                textColor: "",
                x: colNumber(randomNumber(1,4)),
                y: rowNumber(randomNumber(1,4)),
            }
            // console.log(`x: ${newBlock.x}, y: ${newBlock.y}`);
            // for (let i = 0; i < newState.length; i++) {
            //     if (newState[i].x !== newBlock.x) {
            //         newState.push(newBlock);
            //     }
            // }
            // newState.push(newBlock);
            console.log("new array:", newState);
            return newState
        case "LEFT":
            // moving
            for (let i = 0;i < newState.length; i++) {
                if (newState[i].x !== 0) {
                    if (!newState.includes(item => item.x === 0)) {
                        newState[i].x = 0
                    }
                }
                // console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            return newState 
        case "RIGHT":
            // moving
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].x !== colNumber(4)) {
                    newState[i].x = colNumber(4)
                }
                // console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            return newState 
        case "UP":
            // moving
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].y !== 0) {
                    if (!newState.includes(item => item.y === 0)) {
                        newState[i].y = 0
                    }
                }
                // console.log(`value: ${newState[i].value}, x: ${newState[i].x}, y: ${newState[i].y}`);
            }
            return newState 
        case "DOWN":
            // moving
            const duplicates = takeDuplicateElement(newState, newState.length);
            // for (const item of duplicates) {
            //     item.value*=2;

            // }
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].y !== colNumber(4)) {
                    newState[i].y = colNumber(4)
                    for (const item of duplicates) {
                        if (newState[i].value === item.value) {
                            // console.log('di chuyen');
                        }
                        else {
                            newState[i].y = newState[i].y
                        }
                    }

                    // for (let j = i + 1; j < newState.length - 1; j++) {
                        //     if (newState[i].value === newState[j].value) {
                            //         newState[i].value*=2;
                            //         removeElement(newState, newState[i].value)
                            //     }
                            // }
                    }
                }
            // console.log(...duplicates);
            // const abc = []
            // for (let i = 0; i < duplicates.length; i++) {
            //     const b = newState.find(item => item.x === duplicates[i].x && item.y === duplicates[i].y);
            //     abc.push(b)
            // }
            // console.log(abc);
            return newState 
        default:
            return state
    }
}