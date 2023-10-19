import Block from "../Block";
import "./MainGame.scss";
import { useDispatch, useSelector } from "react-redux";
import { DownMoved, LeftMoved, RightMoved, UpMoved, newBlock } from "../../actions/newBlock";
// import { randomNumber } from "../../helpers/randomNumber";
import { gap, blockSize, gridBlock, data } from "../../constant/index";
import { useEffect } from "react";
import { takeDuplicate } from "../../helpers/takeDuplicate";
// import { getUnique } from "../../helpers/getUnique";

export default function MainGame() {
    const dispatch = useDispatch();
    const newData = useSelector(state => state.createNewBlock)
    // const duplicates = takeDuplicate(newData, newData.length);
    // console.log(duplicates);
    console.log("original data", data);
    // console.log("new data", newData);

    const handleMove = (e) => {
        e.preventDefault();
        switch (e.key) {
            case "ArrowUp":
                dispatch(UpMoved(newData))
                dispatch(newBlock())
                break;
            case "ArrowDown":
                dispatch(DownMoved(newData))
                dispatch(newBlock())
                break;
            case "ArrowLeft":
                dispatch(LeftMoved(newData))
                dispatch(newBlock())
                break;
            case "ArrowRight":
                dispatch(RightMoved(newData))
                dispatch(newBlock())
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        window.addEventListener("keydown", handleMove);

        // clean-up function:
        return () => {
            window.removeEventListener("keydown", handleMove);
        }
    }, [])

    return (
        <>
            <div className="layer-2" style={{gap: gap}}>
                <Block />
                {gridBlock && gridBlock.map((_, index) => (
                    <div className="layer-2__block" key={index + 1} style={blockSize}></div>
                ))}
            </div>
        </>
    )
}