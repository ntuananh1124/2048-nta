export const checkColor = (value, backgroundColor, textColor) => {
    switch (value) {
        case 2:
            backgroundColor = "#EEE4DA";
            textColor = "#776E65";
        break;
        case 4:
            backgroundColor = "#EEE1C9";
            textColor = "#776E65";
        break;
        case 8:
            backgroundColor = "#F3B27A";
            textColor = "white"
        break;
        case 16:
            backgroundColor = "#F69664";
            textColor = "white"
        break;
        case 32:
            backgroundColor = "#F77C5F";
            textColor = "white";
        break;
        case 64: 
            backgroundColor = "#F75F3B";
            textColor = "white";
        break;
        case 128: 
            backgroundColor = "#EBCE72";
            textColor = "white";
        break;
        default:
            backgroundColor = "#EDCC62";
            textColor = "white"
        break;
    }
}