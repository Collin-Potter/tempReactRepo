import { userService} from '../services/UserService';
import { userConstants } from '../constants/UserConstants';
import { FORM_CHANGED } from '../constants/FormInputConstants';

export const userActions = {
    getCurrentInfo,
    getCurrentReviews,
    getExternalUserInfo,
};

function getCurrentInfo(user) {
    return (dispatch) => {
        return userService.getCurrentInfo(user)
            .then( response => {
                    let user = response.data;
                    dispatch(success(user));
                    dispatch(successForm(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(user) { return { type: userConstants.GET_CURRENTINFO_SUCCESS, user } }
    function successForm(user) { return { type: FORM_CHANGED, payload: { type: "currentUser", value: user } } }
    function failure(error) { return { type: userConstants.GET_CURRENTINFO_FAILURE, error } }
}

function getCurrentReviews(userJWT, username) {
    return (dispatch) => {
        return userService.getCurrentReviews(userJWT, username)
            .then( response => {
                    let reviewList = response.data;
                    dispatch(success(reviewList));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(reviewList) { return { type: userConstants.GET_CURRENTREVIEWS_SUCCESS, reviewList } }
    function failure(error) { return { type: userConstants.GET_CURRENTREVIEWS_FAILURE, error } }
}

function getExternalUserInfo(username, currentJWT) {
    return (dispatch) => {
        return userService.getExternalInfo(username, currentJWT)
            .then( response => {
                    let user = response.data;
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };

    function success(user) { return { type: userConstants.GET_EXTERNALINFO_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_EXTERNALINFO_FAILURE, error } }
}

