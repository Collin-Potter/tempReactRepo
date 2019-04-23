import { serviceConstants } from '../common/constants/ServiceConstants';
import SitterSearchReducer from "../searchsitter/SitterSearchReducer"


const INITIAL_STATE = {
    list: [{
        username:"",
        email:"",
        firstName: "",
        lastName: "",
        bio: "",
        jwt: "",
        accountProperties: {
            isSitter: "",
            rating: 0,
            jobsCompleted: 0,
        },
        address: {
            address1:"",
            address2:"",
            city:"",
            state:"",
            zipCode: "",
        },
        pets: [{
            name: "",
            type: "",
            careDetails:"",
            owner:"",
        }]
    }],
};


test("FETCH_SITTERS_BYSTRING_SUCCESS", () => {
    const action={sittersList:"This Is A Sitters List", type:serviceConstants.FETCH_SITTERS_BYSTRING_SUCCESS}   
    expect(SitterSearchReducer(INITIAL_STATE, action)).toEqual({list:"This Is A Sitters List"});
});

test("FETCH_SITTERS_BYSTRING_FAILURE", () => {
    const action={sittersList:"This Is A Sitters List", type:serviceConstants.FETCH_SITTERS_BYSTRING_FAILURE}   
    expect(SitterSearchReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={...INITIAL_STATE.currentUser, type:serviceConstants.ADD_JOB_LISTINGS_FAILURE}   
    expect(SitterSearchReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});
