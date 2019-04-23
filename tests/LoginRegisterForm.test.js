import React from 'react';
import LoginRegisterForm from '../login/LoginRegisterForm';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';

import storage from 'redux-persist/lib/storage'

import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

const persistConfig = {
    key: 'root',
    storage,
};

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><LoginRegisterForm /></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});

test("navbar clicked", () => {
    const wrapper = mount(<Provider store={store}><LoginRegisterForm /></Provider>);
    wrapper.setState({activeTab: 1});
    wrapper.find('NavLink').at(0).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.find('NavLink').at(1).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.unmount();
});

test("button clicked", () => {
    const wrapper = mount(<Provider store={store}><LoginRegisterForm /></Provider>);
    wrapper.setState({username: 'username', password: 'password'});
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.state('username')).toEqual('username');
    expect(wrapper.state('password')).toEqual('password');
    wrapper.find('Button').at(1).simulate('click');
    expect(wrapper.state('username')).toEqual('username');
    expect(wrapper.state('password')).toEqual('password');
    wrapper.unmount();
});

test("text field 0 changed", () => {
    const wrapper = mount(<Provider store={store}><LoginRegisterForm /></Provider>);
    wrapper.setState({type: 'text'});
    wrapper.find('AvField').at(0).simulate('change');
    expect(wrapper.state('type')).toEqual('text');
    wrapper.unmount();
});