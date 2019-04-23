import React from 'react';
import ReactDOM from 'react-dom';
import SitterSearch from '../searchsitter/SitterSearch';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});


test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><PersistGate loading={null} persistor={persistor}><SitterSearch /></PersistGate></Provider>, document.getElementById('root')).toJSON();
    expect(tree).toMatchSnapshot()
});