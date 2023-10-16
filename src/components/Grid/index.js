import MainGame from "../MainGame";
import Restart from "../Restart";
import Score from "../Score";
import "./Grid.scss"

export default function Grid() {
    // console.log(window);
    return (
        <>
            <div className="layer-1">
                <div className="layer-1__actions">
                    <Restart />
                    <Score />
                </div>
                <MainGame />
            </div>
        </>
    )
}