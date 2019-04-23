import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingAndRecentJobs from '../dashboard/UpcomingAndRecentJobs';
import Enzyme, {shallow, mount, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});
const jobs = {
    active: [],
    upcoming: [],
    past: [],
};

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><PersistGate loading={null} persistor={persistor}><UpcomingAndRecentJobs jobs={jobs}/></PersistGate></Provider>);
    expect(tree).toMatchSnapshot()
});

test("changing tabs", () => {
    const wrapper = mount(<Provider store={store}><UpcomingAndRecentJobs jobs={jobs} /></Provider>);
    wrapper.setState({activeTab: 1});
    wrapper.find('NavLink').at(0).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.find('NavLink').at(1).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.unmount();
});