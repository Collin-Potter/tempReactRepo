import {FORM_CHANGED} from '../constants/FormInputConstants';
import {userConstants} from "../constants/UserConstants";

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
        name: "",
        type: "",
        description: "",
        owner:"",
    },

    isSitter: false,

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

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                regUsername: "",
                regEmail: "",
                regPassword: "",
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loginUsername: "",
                loginPassword: "",
            };
        case userConstants.EDITPET_SUCCESS:
            return {
                ...state,
                editPetName: "",
                editPetType: "",
                editPetDescription: "",
            };
        case FORM_CHANGED:
            console.log(action.payload.type, action.payload.value)
            return {...state, [action.payload.type]: action.payload.value }
        default:
            return state
    }
}
