import React from 'react';
import UserDetails from '../profile/UserDetails';
import Enzyme, {shallow, mount, render} from "enzyme";
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
    const tree = renderer.create(<Provider store={store}><UserDetails /></Provider>).toJSON();
    expect(tree).toMatchSnapshot()

});

it("testing changing tabs", () => {
    const wrapper = mount(<Provider store={store}><UserDetails /></Provider>);
    wrapper.setState({activeTab: 1});
    wrapper.find('NavLink').at(0).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.find('NavLink').at(1).simulate('click');
    expect(wrapper.state('activeTab')).toEqual(1);
    wrapper.unmount();
});