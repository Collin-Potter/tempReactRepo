import * as DashboardActions from "../dashboard/DashboardActions"
import { userConstants } from '../common/constants/UserConstants';
import {jobListingService} from "../common/services/JobListingService";

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
test("handleRegisterButton", () => {
    console.log(DashboardActions.jobListingActions.submitReview(user,"review"))
});


//function success(review) { return { type: userConstants.POST_REVIEW_SUCCESS , review } }
//function failure(error) { return { type: userConstants.POST_REVIEW_FAILURE, error } }

