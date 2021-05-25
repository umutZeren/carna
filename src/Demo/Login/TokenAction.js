import * as actionTypes from "../../store/actions";
export const getUsers = (token) => async dispatch => {
    {
        dispatch( {
            type: actionTypes.GET_USERS,
            payload: token
        })
    }
}