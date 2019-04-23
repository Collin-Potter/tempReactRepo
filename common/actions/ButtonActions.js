import { FORM_CHANGED } from '../constants/FormInputConstants';
import { userService } from "../services/UserService";
import { jobListingService } from "../services/JobListingService";
import { userConstants } from "../constants/UserConstants";
import { serviceConstants } from "../constants/ServiceConstants";

export const formChanged = ({type, value}) => {
    console.log(type, value);

    return {
        type: FORM_CHANGED,
        payload: {type: type, value: value }
    }
};

export const handleLoginButton = (username, password) => {
    return (dispatch) => {
        dispatch(request({username}));

        return userService.login(username, password)
            .then( response => {
                    console.log(response.data);
                    dispatch(success({ username: username, jwt: response.data.Authorization }));
                },
                error => {
                    dispatch(failure(error.toString()));
                })
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

export const handleRegisterButton = (user) => {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                dispatch(success(user)),
                error => {
                    dispatch(failure(error.toString()));
                })
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
};

export const handleAddNewPetButton = (user, pet) => {
    return (dispatch) => {
        return userService.addPet(user, pet)
            .then( dispatch(success(pet) ),
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };

    function success(pet) { return { type: userConstants.ADDPET_SUCCESS, pet } }
    function failure(error) { return { type: userConstants.ADDPET_FAILURE, error } }
}

export const handleEditPetButton = (user, oldPetName, newPet) => {
    console.log("action edit pet");
    console.log("user" , user);
    console.log("oldPetName" , oldPetName);
    console.log("newPet" , newPet);
    return (dispatch) => {
        return userService.editPet(user, oldPetName, newPet)
            .then( response => {
                    let petList = response.data;
                    console.log("response", petList)
                    dispatch(success(petList));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(petList) { return { type: userConstants.EDITPET_SUCCESS, petList } }
    function failure(error) { return { type: userConstants.EDITPET_FAILURE, error } }
}

export const handleDeletePetButton = (user, petName) => {
    return (dispatch) => {
        return userService.deletePet(user, petName)
            .then(response => {
                let petList = response.data;
                    console.log("delete action" , response.data);

                    dispatch(success(petList));
            },
            error => {
                dispatch(failure(error.toString()));
                //dispatch(alertActions.error(error.toString()));
            })
    };
    function success(petList) { return { type: userConstants.DELETEPET_SUCCESS, petList } }
    function failure(error) { return { type: userConstants.DELETEPET_FAILURE, error } }
}

export const handleAddNewJobButton = (user, job) => {
    console.log(user, job);
    return (dispatch) => {
        return jobListingService.addJob(user, job)
            .then(dispatch(success(job)),
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };

    function success(job) { return { type: serviceConstants.ADD_JOB_LISTINGS_SUCCESS, job } }
    function failure(error) { return { type: serviceConstants.ADD_JOB_LISTINGS_SUCCESS, error } }
}

export const handleRequestJobButton = (job, user) => {
    return (dispatch) => {
        let jobID = job._id;
        return jobListingService.requestJob(jobID, user)
            .then( response => {
                    let jobResponse = response.data;
                    dispatch(success(jobResponse));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(jobResponse) { return { type: serviceConstants.REQUEST_JOB_SUCCESS, jobResponse } }
    function failure(error) { return { type: serviceConstants.REQUEST_JOB_FAILURE, error } }
}





