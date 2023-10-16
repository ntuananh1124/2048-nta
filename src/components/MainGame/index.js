import Block from "../Block";
import "./MainGame.scss";
import { useDispatch, useSelector } from "react-redux";
import { DownMoved, LeftMoved, RightMoved, UpMoved } from "../../actions/newBlock";
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
        // console.log('hell');
        switch (e.key) {
            case "ArrowUp":
                // dispatch(newBlock())
                dispatch(UpMoved(newData))
                // console.log("new data: ", newData);
                break;
            case "ArrowDown":
                // dispatch(newBlock())
                dispatch(DownMoved(newData))
                // console.log(newData);
                // console.log("Xuong", newData);
                break;
            case "ArrowLeft":
                // dispatch(newBlock())
                dispatch(LeftMoved(newData))
                // console.log("Trai", newData);
                break;
            case "ArrowRight":
                // dispatch(newBlock())
                dispatch(RightMoved(newData))
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