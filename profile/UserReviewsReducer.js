import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    list: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.GET_CURRENTREVIEWS_SUCCESS:
            console.log("in review reducer", action)
            return {
                list: action.reviewList,
            };
        case userConstants.GET_CURRENTREVIEWS_FAILURE:
            return {...state,};

        default:
            return state
    }
}
