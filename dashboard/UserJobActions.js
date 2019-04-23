import { userService} from '../common/services/UserService';
import { userConstants } from '../common/constants/UserConstants';



export const userJobActions = {
    getActiveJobList,
    getUpcomingJobList,
    getPastJobList
};



function getActiveJobList(user, status) {
    return (dispatch) => {
        return userService.getJobList(user, status)
            .then(response => {
                let jobs = response.data;
                dispatch(success(jobs));
            },
            error => {
                dispatch(failure(error.toString()));
            })
    };

    function success(jobs) { return { type: userConstants.GET_ACTIVEJOBS_SUCCESS, jobs } }
    function failure(error) { return { type: userConstants.GET_ACTIVEJOBS_FAILURE, error } }
}


function getUpcomingJobList(user, status) {
    return (dispatch) => {
        return userService.getJobList(user, status)
            .then(response => {
                let jobs = response.data;
                dispatch(success(jobs));
            },
            error => {
                dispatch(failure(error.toString()));
            })
    };

    function success(jobs) { return { type: userConstants.GET_UPCOMINGJOBS_SUCCESS, jobs } }
    function failure(error) { return { type: userConstants.GET_UPCOMINGJOBS_FAILURE, error } }
}

function getPastJobList(user, status) {
    return (dispatch) => {
        return userService.getJobList(user, status)
            .then(response => {
                let jobs = response.data;
                dispatch(success(jobs));
            },
            error => {
                dispatch(failure(error.toString()));
            })
    };

    function success(jobs) { return { type: userConstants.GET_RECENTJOBS_SUCCESS, jobs } }
    function failure(error) { return { type: userConstants.GET_RECENTJOBS_FAILURE, error } }
}

