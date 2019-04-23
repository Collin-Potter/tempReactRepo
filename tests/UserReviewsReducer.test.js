import UserReviewsReducer from "../profile/UserReviewsReducer"
import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    list: [],
};

const user = {
    list: [],
};

test("GET_CURRENTREVIEWS_SUCCESS", () => {
    const action={user, type:userConstants.GET_CURRENTREVIEWS_SUCCESS}   
    expect(UserReviewsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, list: action.reviewList});
});

test("GET_CURRENTREVIEWS_FAILURE", () => {
    const action={user, type:userConstants.GET_CURRENTREVIEWS_FAILURE}   
    expect(UserReviewsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={user, type:userConstants}   
    expect(UserReviewsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});