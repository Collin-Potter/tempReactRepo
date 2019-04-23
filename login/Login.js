import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import Carousel from './Carousel';
import FormCard from './LoginRegisterForm';

class Login extends Component {
    constructor(props){
        super(props);
        this.goToDash = this.goToDash.bind(this);
    }

    goToDash(){
        this.props.history.push('/dashboard');
    }

    render() {
        //.log("login", this.props);
        return (
            <Container>
                <Row>
                    <Col sm={6}><Carousel/></Col>
                    <Col sm={6}><FormCard history={this.goToDash.bind(this)}/></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { User }  = state;
    return { User }
}
export default connect(mapStateToProps,{})(Login);
