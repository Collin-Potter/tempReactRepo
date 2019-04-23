import ViewExternalUserReducer from '../profile/ViewExternalUserReducer';
import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    "externalUser": {
        username:"",
        email:"",
        firstName: "",
        lastName: "",
        bio: "",
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
            description:"",
            owner:"",
        }]
    }
};

const user = {
    username:"",
    email:"",
    firstName: "",
    lastName: "",
    bio: "",
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
        description:"",
        owner:"",
    }]
};

test("GET_EXTERNALINFO_SUCCESS", () => {
    const action={user, type:userConstants.GET_EXTERNALINFO_SUCCESS}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, externalUser: action.user});
});

test("GET_EXTERNALINFO_FAILURE", () => {
    const action={user, type:userConstants.GET_EXTERNALINFO_FAILURE}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({});
});


test("ADDPET_SUCCESS", () => {
    const action={user, type:userConstants.ADDPET_SUCCESS}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("ADDPET_FAILURE", () => {
    const action={user, type:userConstants.ADDPET_FAILURE}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("EDITPET_SUCCESS", () => {
    const action={user, type:userConstants.EDITPET_SUCCESS}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("EDITPET_FAILURE", () => {
    const action={user, type:userConstants.EDITPET_FAILURE}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DELETEPET_SUCCESS", () => {
    const action={user, type:userConstants.DELETEPET_SUCCESS}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DELETEPET_FAILURE", () => {
    const action={user, type:userConstants.DELETEPET_FAILURE}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={user, type:userConstants}   
    expect(ViewExternalUserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});