import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthenticationReducer from "../login/AuthenticationReducer"
import { userConstants } from '../common/constants/UserConstants';

const INITIAL_STATE = {
    "loggingIn": false,
    "loggedIn": false,
    "user": {
        username:"",
        jwt: "",
    },
};
const user = {
    username:"",
    jwt: "",
};
test("LOGIN_REQUEST", () => {
    const action={user, type:userConstants.LOGIN_REQUEST}   
    expect(AuthenticationReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, loggingIn: true, user: action.user,});
});

test("LOGIN_SUCCESS", () => {
    const action={user, type:userConstants.LOGIN_SUCCESS}   
    expect(AuthenticationReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE,loggedIn:true, user: action.user,});
});

test("LOGIN_FAILURE", () => {
    const action={user, type:userConstants.LOGIN_FAILURE}   
    expect(AuthenticationReducer(INITIAL_STATE, action)).toEqual({});
});

test("LOGOUT", () => {
    const action={user, type:userConstants.LOGOUT}   
    expect(AuthenticationReducer(INITIAL_STATE, action)).toEqual({});
})

test("DEFAULT", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.ADDPET_FAILURE}   
    expect(AuthenticationReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});