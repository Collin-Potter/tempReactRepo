import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import App from '../App';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import Store from '../configureStore';

const {store, persistor} = Store();

Enzyme.configure({adapter: new Adapter()});
//const mockStore = configureStore();
//let store = mockStore([]);
const div = document.createElement('div');

test("renders", () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>)//.find('Connect(App)').shallow();
    expect(wrapper.exists()).toBe(true);
});


test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});
