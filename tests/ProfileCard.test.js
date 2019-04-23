import React from 'react';
import ReactDOM from 'react-dom';
import {ProfileCard} from '../profile/ProfileCard';
import Enzyme, {shallow, mount, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

const externalUser = {
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
    };

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><ProfileCard externalUser = {externalUser}/></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});

test("change first name", () => {
    const wrapper = mount(<Provider store={store}><ProfileCard externalUser = {externalUser}/></Provider>);
    name = wrapper.find("Card").find("CardBody")
    name = name.props("isEditable")
    console.log(name.length)
    //name.dive()
    //name.simulate('change', "test");
});