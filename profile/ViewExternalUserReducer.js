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

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.GET_EXTERNALINFO_SUCCESS:
            return {
                ...state,
                externalUser: action.user,
            };
        case userConstants.GET_EXTERNALINFO_FAILURE:
            return {};
        case userConstants.ADDPET_SUCCESS:
            state.externalUser.pets.push(action.pet)
            return {
                ...state,
            };
        case userConstants.ADDPET_FAILURE:
            return { ...state };
        case userConstants.EDITPET_SUCCESS:
            state.externalUser.pets  = action.petList;
            return {
                ...state,
            };
        case userConstants.EDITPET_FAILURE:
            return { ...state };
        case userConstants.DELETEPET_SUCCESS:
            state.externalUser.pets  = action.petList;
            return {
                ...state,
            };
        case userConstants.DELETEPET_FAILURE:
            return { ...state };
        default:
            return state
    }
}