import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, Input, InputGroup, InputGroupAddon, InputGroupText, Container, Row, Col, Button, Badge, ListGroup} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { searchChanged, userActions } from './SitterSearchActions'
import Rating from "react-rating";


class SitterSearch extends Component {
    componentWillMount() {
        this.props.fetchAllSitters(this.props.Auth.user);
    }

    renderCards(people, user){
        return (
            <ListGroup flush as="ul" style={{height: "800px", overflow : "scroll", overflowX : "hidden", margin: "1%"}}>
                {people.map(person => {return person.username !== user.username ?  
                    <Card style={{backgroundColor: "#f8f9fa", margin: "0.5%"}}>
                        <CardHeader>
                            <Row>
                                <Avatar style={{ width: "50px", height: "50px"}} alt="Remy Sharp" src="https://www.rd.com/wp-content/uploads/2016/04/sloths-slide1SamTrull.jpg" />
                                <Typography  variant="h5" gutterBottom style={{margin: "1%"}}> <b>Username: </b> {person.username}</Typography> 
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col><Typography variant="h6" align="left"> <b> Full Name: </b> {person.firstName} {person.lastName} </Typography></Col>
                                <Col><Typography variant="h6" align="right"> <b> Location: </b> {person.address.city}, {person.address.state} {person.address.zipCode} </Typography></Col>
                            </Row>
                            <Typography variant="h6"><b>Average Rating:</b> 
                                {person.accountProperties.rating === 0 ? 
                                    (<> <Badge color="light"> No Ratings Yet </Badge> </>) 
                                    : (<> <Rating readonly={true} initialRating={person.accountProperties.rating}
                                        emptySymbol={<i style={{margin: "5px"}} className="fa fa-paw"/>}
                                        fullSymbol={<i style={{color: "#FBBC05", margin: "5px"}} className="fa fa-paw" />}/>
                                        <Badge color="light"> {person.accountProperties.rating.toPrecision(3)}/5 </Badge> </>) }
                            </Typography>
                            <Typography variant="h6"> <b>Bio: </b>
                                Lorem ipsum dolor sia magna in vulputate. In porttitor et dolor et placerat. Nullam vulputate urna libero. Quisque rhoncus eleifend tristique. Suspendisse ultricies, justo mollis posuere sodales, ex nisi tristique sapien, et dapibus massa massa at leo. Vestibulum consectetur vehicula urna vel cursus. Integer semper luctus lorem. Vestibulum aliquet condimentum dictum.
                            </Typography>
                        </CardBody>
                        <Typography variant="h6" align="right" style={{margin: "1%"}}> <Button href={"/profile/" + person.username} color="info" size="sm">View Profile</Button> </Typography>
                    </Card>: null})}
            </ListGroup> 
        );
    }

    render() {
        console.log("SEARCHING SITTER PAGE: ", )
        return (
            <Container>
                <Typography variant="h4" align="center">Search for a User</Typography>
                <InputGroup>
                    <Input type="search" onChange={text => this.props.searchChanged({type: "NewSearchString", value: text.target.value}, this.props.Auth.user)}/>
                    <InputGroupAddon addonType="append"> 
                        <InputGroupText><i className="fa fa-search" /></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                {this.renderCards(this.props.SitterList.list, this.props.Auth.user)}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { Auth, SitterList }  = state;
    return { Auth, SitterList }
}
export default connect(mapStateToProps,{ searchChanged, fetchAllSitters : userActions.fetchAllSitters})(SitterSearch);
