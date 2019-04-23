import Carousel from '../login/Carousel'
import React from 'react';
import renderer from "react-test-renderer";
import Store from '../configureStore';
import Enzyme, {shallow, mount} from "enzyme";
import { Provider } from 'react-redux';
import Adapter from "enzyme-adapter-react-16";

const {store, persistor} = Store();

Enzyme.configure({adapter: new Adapter()});

test("previous", () => {
    const wrapper = mount(<Provider store={store}><Carousel /></Provider>)
    wrapper.setState({animating:true})
    wrapper.find('CarouselControl').at(0).simulate('click');
    wrapper.setState({animating:false})
    wrapper.find('CarouselControl').at(0).simulate('click');
});

test("next", () => {
    const wrapper = mount(<Provider store={store}><Carousel /></Provider>)
    wrapper.setState({animating:true})
    wrapper.find('CarouselControl').at(1).simulate('click');
    wrapper.setState({animating:false})
    wrapper.find('CarouselControl').at(1).simulate('click');
});

test("goToIndex", () => { //This test isnt working for somereason
    const wrapper = mount(<Provider store={store}><Carousel /></Provider>)
    wrapper.setState({animating:true})
    wrapper.find('CarouselIndicators').simulate('click', 1);
    wrapper.setState({animating:false})
    wrapper.find('CarouselIndicators').simulate('click');
    
});

test("onExited", () => {//not quite sure how to go about this one yet
    const wrapper = mount(<Provider store={store}><Carousel /></Provider>)
    wrapper.setState({animating:true})
});