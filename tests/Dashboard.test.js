import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../dashboard/Dashboard';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';

import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><Dashboard /></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});