export const gap = 7;
export const blockSize = {
    width: 70,
    height: 70
}
export const colNumber = (num) => {
    return (blockSize.width + gap)*(num - 1);
}

export const rowNumber = (num) => {
    return (blockSize.height + gap)*(num - 1);
}

export const data = [
    {
        value: 2,
        color: "",
        textColor: "",
        x: colNumber(1),
        y: rowNumber(2)
    },
    {
        value: 64,
        color: "",
        textColor: "",
        x: colNumber(2),
        y: rowNumber(1)
    },
    {
        value: 2048,
        color: "",
        textColor: "",
        x: colNumber(4),
        y: rowNumber(3)
    },
    {
        value: 8,
        color: "",
        textColor: "",
        x: colNumber(2),
        y: rowNumber(3)
    },
    {
        value: 16,
        color: "",
        textColor: "",
        x: colNumber(3),
        y: rowNumber(3)
    },
    {
        value: 16,
        color: "",
        textColor: "",
        x: colNumber(3),
        y: rowNumber(4)
    },
    {
        value: 128,
        color: "",
        textColor: "",
        x: colNumber(4),
        y: rowNumber(2)
    },
    {
        value: 4,
        color: "",
        textColor: "",
        x: colNumber(2),
        y: rowNumber(2)
    },
    {
        value: 4,
        color: "",
        textColor: "",
        x: colNumber(3),
        y: rowNumber(2)
    }
]

export const gridBlock = [];
    for (let i = 0; i < 16; i++) {
        gridBlock.push(i);
    }