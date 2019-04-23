import axios from "axios";

const url = "http://localhost:8080";

export const userService = {
    login,
    logout,
    register,
    getCurrentInfo,
    getExternalInfo,
    getCurrentReviews,
    editProfile,
    getJobList,
    addPet,
    editPet,
    deletePet,
};

function login(username, password) {
    return axios
        .post(url + "/login", {
            username: username,
            password: password,
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return axios
        .post(url + "/users/sign-up", {
            username: user.username,
            email: user.email,
            password: user.password,
        })
        .then(response => {
            console.log("REGISTER FUNCTION", (response));
        })
}

async function getCurrentInfo(user) {
    let config = {
        headers: {'Authorization': user.jwt }
    };

    return await axios
        .get(url + "/profile/" + user.username, config)
}

async function getCurrentReviews(userJWT, username) {
    let config = {
        headers: {'Authorization': userJWT }
    };
    return await axios
        .get(url + "/reviews/user/" + username, config)
}

async function getJobList(user, status) {
    let config = {
        headers: {'Authorization': user.jwt }
    };


    return await axios
        .get(url + "/myjobs/" + user.username + "/" + status, config)
}

async function getExternalInfo(username, currentJWT) {
    let config = {
        headers: {'Authorization': currentJWT }
    };
    return await axios
        .get(url + "/profile/" + username, config)
}

function addPet(user, pet) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    return axios
        .post(url + "/mypets/" + user.username, pet, config)
}

function editPet(user, oldPetName, newPet) {
    let config = {
        headers: {'Authorization': user.jwt }
    };
    console.log("servoce", oldPetName, newPet)
    return axios
        .put(url + "/mypets/" + user.username + "/" + oldPetName, newPet, config)
}

function deletePet(user, petName) {
    let config = {
        headers: {'Authorization': user.jwt }
    };

    return axios
        .post(url + "/mypets/" + user.username + "/" + petName, {}, config)
}

function editProfile(userJWT, user) {
    let config = {
        headers: {
            'Authorization': userJWT
        }
    };
    console.log(user)
    return axios
        .put(url + "/profile/" + user.username, user, config)
}

