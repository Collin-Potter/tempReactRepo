import React from 'react';
import ReactDOM from 'react-dom';
import PetDetails from '../profile/PetDetails';
import Enzyme, {shallow, mount, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Store from '../configureStore';

const {store, persistor} = Store();
Enzyme.configure({adapter: new Adapter()});

const pets = [{
    name: "",
    type: "",
    description:"",
    owner:"",
}]

test("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><PersistGate loading={null} persistor={persistor}><PetDetails pets = {pets}/></PersistGate></Provider>).toJSON();
    expect(tree).toMatchSnapshot()
});