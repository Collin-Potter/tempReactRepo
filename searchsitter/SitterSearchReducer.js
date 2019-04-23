import { serviceConstants } from '../common/constants/ServiceConstants';

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

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case serviceConstants.FETCH_SITTERS_BYSTRING_SUCCESS:
            console.log("inside job board reducer" , action)
            return {
                list: action.sittersList,
            };
        case serviceConstants.FETCH_SITTERS_BYSTRING_FAILURE:
            return {...state,};

        default:
            return state
    }
}
