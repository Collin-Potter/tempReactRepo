import {FORM_CHANGED} from '../common/constants/FormInputConstants';
import {userConstants} from "../common/constants/UserConstants";
import FormReducer from "../common/reducers/FormReducer"

const INITIAL_STATE = {
    loginUsername: "",
    loginPassword: "",

    regUsername: "",
    regEmail: "",
    regPassword: "",

    editPetName: "",
    editPetType: "",
    editPetDescription: "",

    selectedPet:{
        name: "a",
        type: "a",
        description: "a",
        owner:"a",
    },

    currentUser: {
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

test("REGISTER_SUCCESS", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.REGISTER_SUCCESS}   
    expect(FormReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE,regUsername: "",
    regEmail: "",
    regPassword: "",});
});

test("LOGIN_SUCCESS", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.LOGIN_SUCCESS}   
    expect(FormReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE, loginUsername: "",
    loginPassword: "",});
});

test("FORM_CHANGED", () => {
    const action={...INITIAL_STATE.currentUser, type:FORM_CHANGED, payload:{type:0, value:0}}   
    expect(FormReducer(INITIAL_STATE, action)).toEqual({"0":0, ...INITIAL_STATE});
});

test("DEFAULT", () => {
    const action={...INITIAL_STATE.currentUser, type:userConstants.ADDPET_FAILURE}   
    expect(FormReducer(INITIAL_STATE, action)).toEqual({...INITIAL_STATE});
});