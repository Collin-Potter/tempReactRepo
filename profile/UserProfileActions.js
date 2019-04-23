import { userConstants } from '../common/constants/UserConstants';
import { userService } from '../common/services/UserService';


export const profileUserActions = {
    updateUserProfile,
};


function updateUserProfile(userJWT, user){
    return (dispatch) => {
        return userService.editProfile(userJWT, user)
            .then( response => {
                dispatch(success(user));  
            },
            error => {
                dispatch(failure(error.toString()));
            })
    };
    function success(user) { return { type: userConstants.EDITINFO_SUCCESS, user } }
    function failure(error) { return { type: userConstants.EDITINFO_FAILURE, error } }
}
