import { userConstants } from '../common/constants/UserConstants';
const INITIAL_STATE = {
    regUsername: "",
    regEmail: "",
    regPassword: "",
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            console.log(action);
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state = {},
            };
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}