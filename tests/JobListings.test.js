import React from 'react';
import ReactDOM from 'react-dom';
import JobListings from '../joblisting/JobListings';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';

import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><JobListings /></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});

test("Button click", () => {
    const wrapper = mount(<Provider store={store}><JobListings /></Provider>);
    wrapper.setState({target: 'text'});
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.state('target')).toEqual('text');
    wrapper.unmount();
});