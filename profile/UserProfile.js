import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import PetDetails from './PetDetails';
import UserDetails from './UserDetails'
import { ProfileCard } from './ProfileCard';
import * as actions from '../common/actions/UserActions'
import {formChanged} from "../common/actions/ButtonActions";
import * as profileActions from './UserProfileActions';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
          isEditable: false
        };
    }

    componentWillMount(){
        this.props.getExternalUserInfo(this.props.match.params.username, this.props.Auth.user.jwt);
        this.props.getCurrentReviews(this.props.Auth.user.jwt, this.props.match.params.username);
    }

    handler(){
        this.setState({
          isEditable: !this.state.isEditable
        });
    }

    isUser = (username) => username === this.props.match.params.username ? true : false;

    render() {
        console.log("profile", this.props);
        return (
            <Container>
                <Row>
                    <Col sm={5}>
                        <ProfileCard jwt = {this.props.Auth.user}
                                     user={this.props.User.currentUser}
                                     form={this.props.Form}
                                     isEditable = {this.state.isEditable}
                                     handler = {this.handler}
                                     formChanged = {this.props.formChange}
                                     submitChanges = {this.props.profileUserAction}
                                     externalUser = {this.props.ExternalUser.externalUser}
                                     isThisUser = {this.isUser(this.props.Auth.user.username)} />
                    </Col>
                    <Col>
                        <UserDetails isThisUser = {this.isUser(this.props.Auth.user.username)}
                                     user={this.props.User}
                                     externalUser = {this.props.ExternalUser.externalUser}
                                     isEditable = {this.state.isEditable} />
                        <PetDetails isThisUser = {this.isUser(this.props.Auth.user.username)}
                                    externalUser = {this.props.ExternalUser.externalUser}
                                    pets = {this.props.ExternalUser.externalUser.pets} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { Auth, User, Jobs, Reviews, Form, ExternalUser }  = state;
    return { Auth, User, Jobs, Reviews, Form, ExternalUser}
}
export default connect(mapStateToProps,{
    getCurrentInfo : actions.userActions.getCurrentInfo ,
    formChange : formChanged,
    profileUserAction : profileActions.profileUserActions.updateUserProfile,
    getExternalUserInfo : actions.userActions.getExternalUserInfo,
    getCurrentReviews : actions.userActions.getCurrentReviews,

})(UserProfile);
