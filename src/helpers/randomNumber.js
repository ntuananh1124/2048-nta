export function randomNumber(min, max) { // min and max included 
    // console.log(Math.floor(Math.random() * (max - min + 1) + min));
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function random2Number(a,b) {
    let number = Math.floor(Math.random()*2);
    number === 0 ? number = a : number = b
    // console.log(number);
    return number
}