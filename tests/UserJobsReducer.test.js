import UserJobsReducer from "../dashboard/UserJobsReducer"
import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    active: [],
    upcoming: [],
    past: [],
};
const user = {
    active: [],
    upcoming: [],
    past: [],
};

test("GET_ACTIVEJOBS_SUCCESS", () => {
    const action={user, type:userConstants.GET_ACTIVEJOBS_SUCCESS}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, active: action.jobs});
});

test("GET_ACTIVEJOBS_FAILURE", () => {
    const action={user, type:userConstants.GET_ACTIVEJOBS_FAILURE}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("GET_UPCOMINGJOBS_SUCCESS", () => {
    const action={user, type:userConstants.GET_UPCOMINGJOBS_SUCCESS}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, upcoming: action.jobs});
});

test("GET_UPCOMINGJOBS_FAILURE", () => {
    const action={user, type:userConstants.GET_UPCOMINGJOBS_FAILURE}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("GET_RECENTJOBS_SUCCESS", () => {
    const action={user, type:userConstants.GET_RECENTJOBS_SUCCESS}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, past: action.jobs});
});

test("GET_RECENTJOBS_FAILURE", () => {
    const action={user, type:userConstants.GET_RECENTJOBS_FAILURE}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={user, type:userConstants}   
    expect(UserJobsReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});