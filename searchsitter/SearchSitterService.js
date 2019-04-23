import axios from "axios";

const url = "http://localhost:8080";

export const searchService = {
    fetchAll,
    fetchBySearch,
};

async function fetchAll(user) {
    console.log("fetch all is called");
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return await axios
        .get(url + "/sitters", config)
}

async function fetchBySearch(user, query) {
    console.log("fetch by search is called", user, query);
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return await axios
        .post(url + "/sitters/search", {query} , config)
}