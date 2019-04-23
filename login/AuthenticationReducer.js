import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    "loggingIn": false,
    "loggedIn": false,
    "user": {
        username:"",
        jwt: "",
    },
};

export default function authentication(state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.user,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user,
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
