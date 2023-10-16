import { randomNumber } from "../../helpers/randomNumber"
import "./Restart.scss"

export default function Restart() {
    const handleClick = () => {
        console.log(randomNumber(1,4));
    }
    return (
        <>
            <button className="restart-btn" onClick={handleClick}>New Game</button>
        </>
    )
}