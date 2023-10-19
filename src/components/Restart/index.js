import { random2Number } from "../../helpers/randomNumber"
import "./Restart.scss"

export default function Restart() {
    const handleClick = () => {
        random2Number()
    }
    return (
        <>
            <button className="restart-btn" onClick={handleClick}>New Game</button>
        </>
    )
}