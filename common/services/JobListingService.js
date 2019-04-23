import axios from "axios";

const url = "http://localhost:8080";

export const jobListingService = {
    fetchAll,
    addJob,
    requestJob,
    postReview,
    postReviewAndUpdateJob,
    acceptSitter,
};

function fetchAll(user) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return axios
        .get(url + "/jobs", config)
}

function addJob(user, job) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    console.log("handle3")
    return axios
        .post(url + "/jobs/", job, config)
}

function requestJob(jobID, user) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return axios
        .put(url + "/jobs/" + jobID + "/request/" + user.username, {}, config)
}

function postReview(user, review) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return axios
        .post(url + "/reviews/", review, config)
}

function postReviewAndUpdateJob(user, review, job) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    axios.put(url + "/jobs/" + job._id, {reviewed : true}, config) 

    return axios
        .post(url + "/reviews/", review, config)


}

function acceptSitter(user, job, sitter){
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return axios
        .put(url + "/jobs/" + job._id + "/accept/" + sitter, {}, config)



}
