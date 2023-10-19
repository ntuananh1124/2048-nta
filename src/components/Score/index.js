import { useSelector } from "react-redux"
import "./Score.scss"

export default function Score() {
    const data = useSelector(state => state.createNewBlock);
    // console.log(data);

    return (
        <>
            <div className="scores">
                <div className="score">
                    <h3>Score</h3>
                    <span className="score__number">0</span>
                </div>
                <div className="best-score">
                    <h3>Best Score</h3>
                    <span className="best-score__number">2048</span>
                </div>
            </div>
        </>
    )
}