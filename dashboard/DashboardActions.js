import { userConstants } from '../common/constants/UserConstants';
import {jobListingService} from "../common/services/JobListingService";

export const jobListingActions = {
    submitReview,
    acceptSitter,
};

function submitReview(user, review, job) {
    return (dispatch) => {
        return jobListingService.postReviewAndUpdateJob(user, review, job)
            .then( response => {
                    let jobList = response.data;
                    console.log("response", response.data)
                    dispatch(success(jobList));
                    window.location.reload();
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(review) { return { type: userConstants.POST_REVIEW_SUCCESS , review } }
    function failure(error) { return { type: userConstants.POST_REVIEW_FAILURE, error } }
}

function acceptSitter(user, job, sitter) {
    return (dispatch) => {
        return jobListingService.acceptSitter(user, job, sitter)
            .then( response => {
                    let jobAccepted = response.data;
                    console.log("response", response.data)
                    dispatch(success(jobAccepted));
                    window.location.reload();
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(job) { return { type: userConstants.ACCEPT_JOB_SITTER_SUCCESS , job } }
    function failure(error) { return { type: userConstants.ACCEPT_JOB_SITTER_FAILURE, error } }
}

