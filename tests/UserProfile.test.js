import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from '../profile/UserProfile';
import Enzyme, {shallow, mount,render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

const match = {
    params:{
        username:""
    }
}


test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><PersistGate loading={null} persistor={persistor}><UserProfile match={match}/></PersistGate></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});