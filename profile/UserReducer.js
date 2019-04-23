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
            isSitter: false,
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
        case userConstants.GET_CURRENTINFO_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
            };
        case userConstants.GET_CURRENTINFO_FAILURE:
            return {};
        case userConstants.EDITINFO_SUCCESS:
            state.currentUser.pets  = action.petList;
            return {
                ...state,
                currentUser: action.user
            };
        case userConstants.EDITINFO_FAILURE:
            return {
                ...state,
            };
        case userConstants.ADDPET_SUCCESS:
/*
            state.currentUser.pets.push(action.pet)
*/
            return {
                ...state,
            };
        case userConstants.ADDPET_FAILURE:
           return {
               ...state,
           };
        case userConstants.EDITPET_SUCCESS:
/*
            state.currentUser.pets  = action.petList;
*/
            return {
                ...state,
            };
        case userConstants.EDITPET_FAILURE:
            return {
                ...state,
            };
        case userConstants.DELETEPET_SUCCESS:
            state.currentUser.pets  = action.petList;
            return {
                ...state,
            };
        case userConstants.DELETEPET_FAILURE:
            return {
                ...state,
            };
        default:
            return state
    }
}
