import mockAxios from "jest-mock-axios";
import JobListingService, { jobListingService } from "../common/services/JobListingService"
const url = "http://localhost:8080";
import { promised } from "q";


const user= {
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



let config = {
    headers: {'Authorization': user.jwt }
}

test("fetchAll", async() => {
    jobListingService.fetchAll(user)
    expect(mockAxios.get).toHaveBeenCalledWith(url + "/jobs", config);

});

test("addJob", async() => {
    const job = {
        clientUsername: "",
        startTime: "",
        endTime: "",
        details: "",
        atClientAddress: false
    }
    jobListingService.addJob(user)
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/jobs/", undefined, config); //will have to figure out why this is undefined later
});

test("postReview", async() => {
    const review = {details:""}
    jobListingService.postReview(user, review)
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/jobs/", undefined, config);
});