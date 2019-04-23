import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ActiveJobs} from '../dashboard/ActiveJobs';
import Enzyme, {shallow, render, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Store from '../configureStore';
import {
    Card,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from 'reactstrap';

const {store, persistor} = Store();

Enzyme.configure({adapter: new Adapter()});

const jobs = {
    active: [],
    upcoming: [],
    past: [],
};

test("renders", () => { 
    const tree = renderer.create(<Provider store={store}><ActiveJobs jobs={jobs}/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("ListGroupItem", () => {
    const wrapper = mount(<Provider store={store}><ActiveJobs jobs={jobs}  ListOfJobs={jest.fn()}/></Provider>);
    //console.log(wrapper.find("Card").at(1).prop("ListOfJobs")())
    wrapper.find("Card").at(1).simulate("blur", jobs) //notreally sure how to go about this 
    //expect().toBe(true);
});
