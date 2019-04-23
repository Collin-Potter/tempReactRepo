import { serviceConstants } from '../common/constants/ServiceConstants';
import {jobListingService} from "../common/services/JobListingService";

export const jobListingActions = {
    fetchAllJobListings,
};

function fetchAllJobListings(user) {
    return (dispatch) => {
        return jobListingService.fetchAll(user)
            .then( response => {
                    let jobList = response.data;
                    console.log("response", response.data)
                    dispatch(success(jobList));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(jobList) { return { type: serviceConstants.FETCH_JOB_LISTINGS_SUCCESS, jobList } }
    function failure(error) { return { type: serviceConstants.FETCH_JOB_LISTINGS_FAILURE, error } }
}
