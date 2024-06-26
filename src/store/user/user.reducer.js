import {USER_ACTIONS_TYPE} from "./user.types";

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_ACTIONS_TYPE.SIGN_IN_SUCCESS:
            return {...state, currentUser: payload};
        case USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null};
        case USER_ACTIONS_TYPE.SIGN_OUT_FAILED:
        case USER_ACTIONS_TYPE.SIGN_IN_FAILED:
        case USER_ACTIONS_TYPE.SIGN_UP_FAILED:
            return {...state, error: payload};
        default:
            return state;
    }
}