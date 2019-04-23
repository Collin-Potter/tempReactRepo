import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card } from "reactstrap";
import { handleLoginButton, handleRegisterButton, formChanged } from "../common/actions/ButtonActions";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import FormValidator from "../common/FormValidator";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Toasts from "../common/Toasts";
import { addToast } from "../common/actions/ToastActions";

class LoginRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.Auth.loggedIn === true) this.props.history();
  }

  handleLogin(event) {
    console.log("login", event)
    if ( FormValidator.validateUsername(event.username, true)
        && FormValidator.validatenNewPassword(event.password, true) )
    {
         this.props.handleLoginButton(event.username, event.password);
        //  const { addToast } = this.props.actions;
        //  addToast({ text: "Login Successful!" });
    } 
    else { alert("Please Enter a Valid Username and Password"); }
  }

  handleRegister(event) {
    console.log("register handle", event)
    if ( FormValidator.validateUsername(event.username, true)
        && FormValidator.validateEmail(event.email, true)
        && FormValidator.validatenNewPassword(event.password, false) )
    {
      this.props.handleRegisterButton({email: event.email, username: event.username, password: event.password});
      // const { addToast } = this.props.actions;
      // addToast({ text: "Registration Successful!" });
    }
    else { alert("Please Enter a Valid Username, Email, and Password"); }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => { this.toggle("1"); }} >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => { this.toggle("2"); }} >
              Register
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Card style={{ margin: "2%", backgroundColor: "#f8f9fa", padding: "5%" }} >
              <AvForm>
                <AvField name="loginUsername" type="text" label={<i className="fa fa-user" />} placeholder="Enter Username" errorMessage="Please enter a valid username (letters and numbers only)" 
                  validate={{
                      required: {value: true},
                      pattern: {value: '^[A-Za-z0-9]+$'},
                      minLength: {value: 1},
                      maxLength: {value: 30}
                  }} 
                  onChange={text => this.props.formChanged({type: "loginUsername", value: text.target.value})}/>
                <AvField name="loginPassword" type="password" label={<i className="fa fa-lock" />} placeholder="Enter Password" errorMessage="Please enter a valid password (letters and numbers only)" 
                  validate={{
                      required: {value: true},
                      pattern: {value: '^[A-Za-z0-9]+$'},
                      minLength: {value: 1},
                      maxLength: {value: 30}
                  }} 
                  onChange={text => this.props.formChanged({type: "loginPassword", value: text.target.value})}/>
                <Button block color="primary" onClick={ () => this.handleLogin( { username: this.props.Form.loginUsername, password: this.props.Form.loginPassword } ) } >
                  Login
                </Button>
              </AvForm>
            </Card>
          </TabPane>
          <TabPane tabId="2">
            <Card style={ { margin: "2%", backgroundColor: "#f8f9fa", padding: "5%" } } >
              <AvForm>
                  <AvField name="regUsername" type="text" label={<i className="fa fa-user" />} placeholder="Enter Username" errorMessage="Please enter a valid username (letters and numbers only)" 
                    validate={{
                        required: {value: true},
                        pattern: {value: '^[A-Za-z0-9]+$'},
                        minLength: {value: 1},
                        maxLength: {value: 30}
                    }} 
                    onChange={text => this.props.formChanged({type: "regUsername", value: text.target.value})}/>
                  <AvField name="regEmail" label={<i className="fa fa-envelope" />} type="email" placeholder="Enter Email" errorMessage="Please enter a valid email (example@example.com)" 
                          validate={{required: {value: true}, email: true}}
                          onChange={text => this.props.formChanged({type: "regEmail", value: text.target.value})}/>
                  <AvField name="regPassword" type="password" label={<i className="fa fa-lock" />} placeholder="Enter Password" errorMessage="Please enter a valid password (letters and numbers only)" 
                    validate={{
                        required: {value: true},
                        pattern: {value: '^[A-Za-z0-9]+$'},
                        minLength: {value: 1},
                        maxLength: {value: 30}
                    }} 
                    onChange={text => this.props.formChanged({type: "regPassword", value: text.target.value})}/>
                  <Button block color="primary" onClick={ () => this.handleRegister( 
                    { email: this.props.Form.regEmail, username: this.props.Form.regUsername, password: this.props.Form.regPassword } ) } >
                    Register
                  </Button>
              </AvForm>
            </Card>
          </TabPane>
        </TabContent>
        <Toasts />
      </>
    );
  }
}

LoginRegisterForm.propTypes = {
  actions: PropTypes.shape ({
    addToast: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addToast }, dispatch)
})

const mapStateToProps = state => { 
    const { Auth, User, Register, Form } = state;
    return { Auth, User, Register,Form };
};

export default connect( mapStateToProps,{ handleLoginButton, handleRegisterButton, formChanged, mapDispatchToProps, } ) (LoginRegisterForm);