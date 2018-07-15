import { enthusiasm } from "./HelloReducer";
import { combineReducers } from "redux";
import fetchUser from "./LayoutReducer"

export default combineReducers({
    auth: fetchUser
});
