import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Home from './home/Home';
import Login from './login/Login';
import MyNavbar from './common/Navbar';
import Dashboard from './dashboard/Dashboard';
import UserProfile from "./profile/UserProfile";
import JobListings from "./joblisting/JobListings";
import SitterSearch from "./searchsitter/SitterSearch";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Toasts from "./common/Toasts";
import { addToast } from "./common/actions/ToastActions";

import ToastNotifications from "./common/Toast/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Attempting to call addToast method from App.js...');
    this.props.addToast({ text: "TEST TOAST DISPLAY" });    
  }

  render() {
    return (
      <div> {/* This div is for testing purposes only */}
        <Router >
          <div className="App">
            <MyNavbar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile/:username" component={UserProfile} />
            <Route exact path="/joblisting" component={JobListings} />
            <Route exact path="/searchsitter" component={SitterSearch} />
          </div>
        </Router>
        <button onClick={this.handleClick}>CLICK FOR TTEST...</button>
        <Toasts /> {/* Initialize array of Toast objects */}
        {/* <ToastNotifications /> */}
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    addToast: PropTypes.func.isRequired
  }).isRequired
};


const mapDispatchToProps = dispatch => { return {
  addToast: options => { dispatch(addToast(options)) }, dispatch }
};

// { return { addToast: options => { dispatch(addToast(options)) }, dispatch } };

const mapStateToProps = state => {
  const { User }  = state;
  return { User }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);