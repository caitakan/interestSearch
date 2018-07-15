import { StoreState } from "../models/RootState";
import { Action, handleActions, handleAction } from "redux-actions";
import { FETCH_USER } from "../actions/LayoutActions"
import axios from "axios";


export default function(state: any = null, action: any){
    console.log(action);
    switch (action.type){
        case(FETCH_USER):
            return action.payload || false;

        default:
            return state;
    }
};

// const initialState: any = {}; 

// export const reducer = handleActions({
//     [FETCH_USER]: (dispatch: any) => {
//                     axios
//                         .get("/auth/current_user")
//                         .then(res => dispatch({type: FETCH_USER, payload: res}));
//                 }
    
// }, initialState)
