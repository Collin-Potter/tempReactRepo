import UserReducer from "../profile/UserReducer"
import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    "currentUser": {
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
        description:"",
        owner:"",
    }]
};

const pets = [{
    name: "",
    type: "",
    description:"",
    owner:"",
}];

test("GET_ACTIVEJOBS_SUCCESS", () => {
    const action={user, type:userConstants.GET_CURRENTINFO_SUCCESS}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, currentUser: action.user});
});

test("GET_CURRENTINFO_FAILURE", () => {
    const action={user, type:userConstants.GET_CURRENTINFO_FAILURE}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({});
});

test("EDITINFO_SUCCESS", () => {
    const action={user, type:userConstants.EDITINFO_SUCCESS}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, currentUser: action.user});
});

test("EDITINFO_FAILURE", () => {
    const action={user, type:userConstants.EDITINFO_FAILURE}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

/*
test("ADDPET_SUCCESS", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.ADDPET_SUCCESS}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});*/

test("ADDPET_FAILURE", () => {
    const action={user, type:userConstants.ADDPET_FAILURE}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("EDITPET_SUCCESS", () => {
    const action={user, type:userConstants.EDITPET_SUCCESS}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("EDITPET_FAILURE", () => {
    const action={user, type:userConstants.EDITPET_FAILURE}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DELETEPET_SUCCESS", () => {
    const action={user, type:userConstants.DELETEPET_SUCCESS}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DELETEPET_FAILURE", () => {
    const action={user, type:userConstants.DELETEPET_FAILURE}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={user, type:userConstants}   
    expect(UserReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});