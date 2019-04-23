import { FORM_CHANGED } from '../common/constants/FormInputConstants';
import { userService } from "../common/services/UserService";
import { jobListingService } from "../common/services/JobListingService";
import { userConstants } from "../common/constants/UserConstants";
import { serviceConstants } from "../common/constants/ServiceConstants";
import * as ButtonActions from "../common/actions/ButtonActions"
import React from 'react';


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
}



test("formChanged", () => {
    const answer = {type: FORM_CHANGED, payload: {type: "Some Type", value: "SomeValue" }}
    expect(ButtonActions.formChanged({type:"Some Type", value:"SomeValue"})).toEqual({...answer})
});

test("handleLoginButton", () => {
    //expect(ButtonActions.handleLoginButton("name","psswd")()).toEqual("idk")
});

test("handleRegisterButton", () => {

});

test("handleAddNewPetButton", () => {

});

test("handleEditPetButton", () => {

});

test("handleDeletePetButton", () => {

});

test("handleAddNewJobButton", () => {
    console.log(ButtonActions.handleAddNewJobButton(user, "some Job"))
});