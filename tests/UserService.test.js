import mockAxios from "jest-mock-axios";
import UserService, { userService } from "../common/services/UserService"
const url = "http://localhost:8080";
import { promised } from "q";

const user= {
    username:"username",
    email:"email",
    password:"password",
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

const pet = {
    name: "",
    type: "",
    description:"",
    owner:""
};

const username = "username";
const email = "email";
const password = "password";
const userJWT = "";
const status = "status";
const jwt = "jwt";
const oldPetName = "oldPetName";
const newPet = "newPet";
const petName = "petName";

let config = {
    headers: {'Authorization': userJWT }
};

test("login", async() => {
    userService.login(username,password);
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/login", {username: username, password: password});
});

test("logout", async() => {
    userService.logout();
    expect(mockAxios.post).toHaveBeenCalled();
});

test("register", async() => {
    userService.register(user);
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/users/sign-up", {username: username, email: email, password: password});
});

test("getCurrentInfo", async() => {
    userService.getCurrentInfo(user);
    expect(mockAxios.get).toHaveBeenCalledWith(url + "/profile/" + username, config);
});

test("getCurrentReviews", async() => {
    userService.getCurrentReviews(userJWT, username);
    expect(mockAxios.get).toHaveBeenCalledWith(url + "/reviews/user/" + username, config);
});

test("getJobList", async() => {
    userService.getJobList(user, status);
    expect(mockAxios.get).toHaveBeenCalledWith(url + "/myjobs/" + username + "/" + status, config);
});

test("getExternalInfo", async() => {
    userService.getExternalInfo(username, jwt);
    expect(mockAxios.get).toHaveBeenCalledWith(url + "/profile/" + username, config);
});

test("deletePet", async() => {
    userService.deletePet(user, petName);
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/mypets/" + username + "/" + petName, {}, config);
});

test("editProfile", async() => {
    userService.editProfile(userJWT, user);
    expect(mockAxios.put).toHaveBeenCalledWith(url + "/profile/" + username, user, config);
});

test("addPet", async() => {
    userService.addPet(user, pet);
    expect(mockAxios.post).toHaveBeenCalledWith(url + "/mypets/" + username, pet, config);
});

test("editPet", async() => {
    userService.editPet(user, oldPetName, newPet);
    expect(mockAxios.put).toHaveBeenCalledWith(url + "/mypets/" + username + "/" + oldPetName, newPet, config);
});