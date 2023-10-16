import { combineReducers } from "redux";
import createNewBlock from "./createNewBlock"
// import moveBlock from "./moveBlock"

const allReducers = combineReducers({
    createNewBlock,
    // moveBlock,
    // thêm nhiều reducer ở đây
})

export default allReducers;