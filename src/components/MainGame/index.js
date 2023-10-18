import Block from "../Block";
import "./MainGame.scss";
import { useDispatch, useSelector } from "react-redux";
import { DownMoved, LeftMoved, RightMoved, UpMoved, newBlock } from "../../actions/newBlock";
// import { randomNumber } from "../../helpers/randomNumber";
import { gap, blockSize, gridBlock, data } from "../../constant/index";
import { useEffect } from "react";
// import { getUnique } from "../../helpers/getUnique";

export default function MainGame() {
    const dispatch = useDispatch();
    const newData = useSelector(state => state.createNewBlock)
    console.log("original data", data);
    // console.log("new data", newData);

    const handleMove = (e) => {
        e.preventDefault();
        // console.log('hell');
        switch (e.key) {
            case "ArrowUp":
                dispatch(UpMoved(newData))
                dispatch(newBlock())
                // console.log("new data: ", newData);
                break;
            case "ArrowDown":
                dispatch(DownMoved(newData))
                dispatch(newBlock())
                // console.log(newData);
                // console.log("Xuong", newData);
                break;
            case "ArrowLeft":
                dispatch(LeftMoved(newData))
                // dispatch(newBlock())
                // console.log("Trai", newData);
                break;
            case "ArrowRight":
                dispatch(RightMoved(newData))
                // dispatch(newBlock())
                // console.log("Phai", newData);
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