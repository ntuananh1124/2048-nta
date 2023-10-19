// import { checkColor } from "../../helpers/checkColors";
import { useSelector } from "react-redux";
import { blockSize } from "../../constant";
import { checkColor } from "../../helpers/checkColors";

export default function Block() {
    // console.log(data);
    const data = useSelector(state => state.createNewBlock);

    return (
        <>
            <div className="layout">
                {data && data.map((blockItem, blockIndex) => {
                        // check color:
                        switch (blockItem.value) {
                            case 2:
                                blockItem.color = "#EEE4DA";
                                blockItem.textColor = "#776E65";
                            break;
                            case 4:
                                blockItem.color = "#EEE1C9";
                                blockItem.textColor = "#776E65";
                            break;
                            case 8:
                                blockItem.color = "#F3B27A";
                                blockItem.textColor = "white";
                            break;
                            case 16:
                                blockItem.color = "#F69664";
                                blockItem.textColor = "white";
                            break;
                            case 32:
                                blockItem.color = "#F77C5F";
                                blockItem.textColor = "white";
                            break;
                            case 64: 
                                blockItem.color = "#F75F3B";
                                blockItem.textColor = "white";
                            break;
                            case 128: 
                                blockItem.color = "#EBCE72";
                                blockItem.textColor = "white";
                            break;
                            default:
                                blockItem.color = "#EDCC62";
                                blockItem.textColor = "white"
                            break;
                        }

                        let styles = {
                            backgroundColor: blockItem.color,
                            color: blockItem.textColor
                        }

                        return (
                            <div className={blockItem.value > 1000 ? "layer-2__block__new font-size-small box-shadow" : "layer-2__block__new" } key={blockIndex + 1} style={{...styles, left: blockItem.x, top: blockItem.y, ...blockSize}}>
                                <span className="layer-2__block__value">{blockItem.value}</span>
                            </div>
                    )
                })}
            </div>
        </>
    )
}