import { userConstants } from '../common/constants/UserConstants';
import RegistrationReducer from "../login/RegistrationReducer"

const INITIAL_STATE = {
    regUsername: "",
    regEmail: "",
    regPassword: "",
}

test("REGISTER_REQUEST", () => {
    const action={type:userConstants.REGISTER_REQUEST}   
    expect(RegistrationReducer(INITIAL_STATE, action)).toEqual({registering: true});
});

test("REGISTER_SUCCESS", () => {
    const action={type:userConstants.REGISTER_SUCCESS}   
    expect(RegistrationReducer(INITIAL_STATE, action)).toEqual({});
});

test("REGISTER_FAILURE", () => {
    const action={type:userConstants.REGISTER_FAILURE}   
    expect(RegistrationReducer(INITIAL_STATE, action)).toEqual({});
});

test("DEFAULT", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.ADDPET_FAILURE}   
    expect(RegistrationReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});
