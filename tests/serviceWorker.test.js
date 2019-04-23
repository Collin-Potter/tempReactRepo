import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';


import * as serviceWorker from "../serviceWorker"
import JestMockPromise from 'jest-mock-promise';
const swUrl = ""
const config = {
    onUpdate:jest.fn(x => true),
    onSuccess:jest.fn(x => true)
}
test("config", () => {
    serviceWorker.register(config)
});

test("config", () => {
    serviceWorker.unregister()
});

