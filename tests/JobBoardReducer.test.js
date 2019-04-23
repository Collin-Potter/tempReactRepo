import { serviceConstants } from '../common/constants/ServiceConstants';
import JobBoardReducer from "../joblisting/JobBoardReducer"


const INITIAL_STATE = {
    jobList: [],
};

test("FETCH_JOB_LISTINGS_SUCCESS", () => {
    const action={jobList:"This Is A Job List", type:serviceConstants.FETCH_JOB_LISTINGS_SUCCESS}   
    expect(JobBoardReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, jobList:"This Is A Job List"});
});

test("FETCH_JOB_LISTINGS_FAILURE", () => {
    const action={jobList:"This Is A Job List", type:serviceConstants.FETCH_JOB_LISTINGS_FAILURE}   
    expect(JobBoardReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={jobList:"This Is A Job List", type:serviceConstants.ADD_JOB_LISTINGS_FAILURE}   
    expect(JobBoardReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

