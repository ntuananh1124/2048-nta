export const newBlock = () => {
    return {
        type: "CREATE_NEW_BLOCK",
    }
} 

export const LeftMoved = (data) => {
    return {
        type: "LEFT",
        data: data
    }
}

export const RightMoved = (data) => {
    return {
        type: "RIGHT",
        data: data
    }
}

export const UpMoved = (data) => {
    return {
        type: "UP",
        data: data
    }
}

export const DownMoved = (data) => {
    return {
        type: "DOWN",
        data: data
    }
}

export const updateValue = (data) => {
    return {
        type: "UPDATE_VALUE",
        data: data
    }
}
