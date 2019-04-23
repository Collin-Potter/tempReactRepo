import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    active: [],
    upcoming: [],
    past: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.GET_ACTIVEJOBS_SUCCESS:
            return {
                ...state,
                active: action.jobs,
            };
        case userConstants.GET_ACTIVEJOBS_FAILURE:
            return {...state,};

        case userConstants.GET_UPCOMINGJOBS_SUCCESS:
            return {...state,
                upcoming: action.jobs,
            };
        case userConstants.GET_UPCOMINGJOBS_FAILURE:
            return {...state,};
        case userConstants.GET_RECENTJOBS_SUCCESS:
            return {
                ...state,
                past: action.jobs,
            };
        case userConstants.GET_RECENTJOBS_FAILURE:
            return {...state,};

        case userConstants.ACCEPT_JOB_SITTER_SUCCESS:
            return {...state,};
        
        case userConstants.ACCEPT_JOB_SITTER_FAILURE:
            return {...state,};

        default:
            return state
    }
}
