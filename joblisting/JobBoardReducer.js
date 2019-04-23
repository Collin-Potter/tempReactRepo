import { serviceConstants } from '../common/constants/ServiceConstants';

const INITIAL_STATE = {
    jobList: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case serviceConstants.FETCH_JOB_LISTINGS_SUCCESS:
            return {
                jobList: action.jobList,
            };
        case serviceConstants.FETCH_JOB_LISTINGS_FAILURE:
            return {...state,};
        case serviceConstants.REQUEST_JOB_SUCCESS:
            return {
                ...state,
                jobList: state.jobList.map(job => job._id === action.jobResponse._id ?
                    {...job, applicants: action.jobResponse.applicants} : job )
            };
        default:
            return state
    }
}
