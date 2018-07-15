import axios from "axios";

export const FETCH_USER = "fetchUser";

export const fetchUser = () => {
    return function (dispatch: any) {
        axios
            .get("/auth/current_user")
            .then(res => dispatch({type: FETCH_USER, payload: res.data}));
    }
}
// import { createAction } from "redux-actions";

// export const FETCH_USER = "fetchUser";

// export const fetchUser = createAction(FETCH_USER);