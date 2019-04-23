import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, Container, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Label, ModalFooter, Button} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { ActiveJobs } from './ActiveJobs';
// import UpcomingAndRecentJobs from './UpcomingAndRecentJobs'
import * as actions from "../common/actions/UserActions";
import * as jobActions from "./UserJobActions";
import * as jobListActions from "../joblisting/JobListingActions";
import {formChanged} from "../common/actions/ButtonActions";
import { jobListingActions } from "./DashboardActions"; 
import { Typography } from '@material-ui/core';
// import FormValidator from "../common/FormValidator";
var moment = require('moment');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalListItemEdit: false
        }
        this.renderTable = this.renderTable.bind(this);
        this.activeJobCell = this.activeJobCell.bind(this);
        this.pendingJobCell = this.pendingJobCell.bind(this);
        this.completedJobCell = this.completedJobCell.bind(this);
        this.renderTablePending = this.renderTablePending.bind(this);    
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount(){

        let {username, jwt} = this.props.Auth.user;
        this.props.getCurrentInfo({username: username, jwt: jwt});
        this.props.getAllJobListings(this.props.Auth.user);
        this.props.getActiveJobList({username: username, jwt: jwt}, "active");
        this.props.getUpcomingJobList({username: username, jwt: jwt}, "upcoming");
        this.props.getPastJobList({username: username, jwt: jwt}, "past");
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    renderTable(props){
        return (
            <ListGroup flush as="ul" style={{height: "350px", overflow : "scroll", overflowX : "hidden"}}>
                {props.mapped.map(Job => {return Job.taken === true ?  
                    <ListGroupItem style={{padding: "0", margin:"0.5%"}}>
                        {props.func(Job)}
                    </ListGroupItem>
                    :
                    null})}
            </ListGroup>    
        );
    }

    renderTablePending(props){
        return (
            <ListGroup flush as="ul" style={{height: "350px", overflow : "scroll", overflowX : "hidden"}}>
                {props.mapped.map(Job => {return Job.taken === false && Job.clientUsername === this.props.Auth.user.username ?  
                    <ListGroupItem style={{padding: "0", margin:"0.5%"}}>
                        {props.func(Job)}
                    </ListGroupItem>
                    :
                    null})}
            </ListGroup>    
        );
    }


    activeJobCell(job){
        return ( 
           <Card style={{backgroundColor: "#f8f9fa"}}>
                <CardHeader style={{padding: "1%"}} align="center"> <h6><b>Client: </b> {job.clientUsername}</h6> </CardHeader>
                <CardBody>
                    <Row>
                        <Col><b>Start Date: </b> {moment(job.startTime).format('M/D/YY')}</Col>
                        <Col><b>End Date: </b> {moment(job.endTime).format('M/D/YY')}</Col>
                    </Row>
                    <Row>
                        <Col><b>Start Time: </b> {moment(job.startTime).format('hh:mm A')}</Col>
                        <Col><b>End Time: </b> {moment(job.endTime).format('hh:mm A')}</Col>
                    </Row>
                    <b>Details: </b> {job.details} <br />
                    <b>Taken by Sitter: </b> {job.sitterUsername} <br />
                </CardBody>
            </Card>);
    }

    //Add Dropdown Buttons for each cell to accept a sitter requesters: []
    pendingJobCell(job){
        return (
            <Card style={{backgroundColor: "#f8f9fa"}}>
                <CardHeader style={{padding: "1%"}} align="center"> <h6><b>Client: </b> {job.clientUsername}</h6> </CardHeader>
                <CardBody>
                    <Row>
                        <Col><b>Start Date: </b> {moment(job.startTime).format('M/D/YY')}</Col>
                        <Col><b>End Date: </b> {moment(job.endTime).format('M/D/YY')}</Col>
                    </Row>
                    <Row>
                        <Col><b>Start Time: </b> {moment(job.startTime).format('hh:mm A')}</Col>
                        <Col><b>End Time: </b> {moment(job.endTime).format('hh:mm A')}</Col>
                    </Row>
                    <b>Details: </b> {job.details} <br />
                </CardBody>
                <Typography variant="h6" align="right" style={{margin: "0.5%"}}>
                    <UncontrolledDropdown direction="left" size="sm" color="secondary">
                        <DropdownToggle caret color="info">
                            Available Sitters
                        </DropdownToggle>
                        <DropdownMenu size = "sm" right style={{ overflow : "scroll", overflowX : "hidden"}}>
                            {job.applicants.length ? 
                            (<><DropdownItem header>Available Sitters</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                {job.applicants.map( applicant => { return (
                                    <>
                                        <DropdownItem size="lg" disabled>
                                            <h4>{applicant}</h4>
                                        </DropdownItem>
                                        <DropdownItem size="sm" href={"/profile/" + applicant} >
                                            View Profile
                                        </DropdownItem>
                                        <DropdownItem size="sm" onClick={() => this.props.acceptSitter(this.props.Auth.user, job, applicant)}>
                                            Accept Sitter
                                        </DropdownItem>
                                        <DropdownItem divider></DropdownItem>
                                    </>
                                )})}
                            </>) : (<DropdownItem header>Job not yet requested by a sitter</DropdownItem>)}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Typography>
            </Card>);
    }

    //Add reviewform if isReviewed is false between teh ModalBody add if
    //isReviewed display the button
    completedJobCell(job){
        return(
            <Card style={{backgroundColor: "#f8f9fa"}}>
                <CardHeader style={{padding: "1%"}} align="center"> <h6><b>Client: </b> {job.clientUsername}</h6> </CardHeader>
                <CardBody>
                    <Row>
                        <Col><b>Start Date: </b> {moment(job.startTime).format('M/D/YY')}</Col>
                        <Col><b>End Date: </b> {moment(job.endTime).format('M/D/YY')}</Col>
                    </Row>
                    <Row>
                        <Col><b>Start Time: </b> {moment(job.startTime).format('hh:mm A')}</Col>
                        <Col><b>End Time: </b> {moment(job.endTime).format('hh:mm A')}</Col>
                    </Row>
                    <b>Details: </b> {job.details} <br />
                    <b>Taken by Sitter: </b> {job.sitterUsername} <br />
                </CardBody>
                {job.reviewed === false && this.props.Auth.user.username === job.clientUsername && job.sitterUsername !== job.clientUsername ?  
                    <>
                        <Typography variant="h6" align="right" style={{margin: "1%"}}> <Button size="sm" color="primary" onClick={this.toggle}>Post a Review</Button> </Typography>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <AvForm>
                                <ModalHeader toggle={this.toggle}>Review {job.sitterUsername} for this Job</ModalHeader>
                                <ModalBody>
                                    <Label>Rating: </Label>
                                    <AvField name="reviewFormRating" type="select" errorMessage="Please select a rating" 
                                        validate={{required: {value: true}}} 
                                        onChange={text => this.props.formChanged({ type: "reviewFormRating", value: text.target.value })} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </AvField>
                                    <Label>Review Content: </Label>
                                    <AvField name="reviewFormComment" type="textarea" rows="3" placeholder="Please provide written feedback..." errorMessage="Please provide a description comprised of letters, numbers, and standard punctuation (. , ; : ! ?)" 
                                        validate={{
                                            required: {value: true},
                                            pattern: {value: '^[A-Za-z0-9,.!?;: ]+$'},
                                            minLength: {value: 1},
                                            maxLength: {value: 255}
                                        }} 
                                        onChange={text => this.props.formChanged({type: "reviewFormComment", value: text.target.value})} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" block onClick={() =>
                                        this.props.handleSubmit(this.props.Auth.user, {user: job.sitterUsername, author: this.props.User.currentUser.username, rating: this.props.Form.reviewFormRating, details: this.props.Form.reviewFormComment, jobID: job._id}, job)}
                                    >Add Review</Button>
                                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </AvForm>
                        </Modal>
                    </>: null}
            </Card>
        );
    }

    render() {
        return (
            <Container>
                {console.log(this.props.Jobs)}
                <Row>
                    <Card style={{width: "48%", margin: "0.5%"}}>
                        <CardHeader><Typography variant="h5" align="center">Active Sitters</Typography></CardHeader>
                        <CardBody style={{padding: "0.5%"}}>
                            <this.renderTable name="Active Sitters" mapped={this.props.Jobs.active} func={this.activeJobCell}/>
                        </CardBody>
                    </Card>
                    <Card style={{width: "48%", margin: "0.5%"}}>
                        <CardHeader><Typography variant="h5" align="center">Pending Job Requests</Typography></CardHeader>
                        <CardBody style={{padding: "0.5%"}}>
                            <this.renderTablePending name="Pending Requests" mapped={this.props.JobBoard.jobList} func={this.pendingJobCell}/>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <Card style={{width: "48%", margin: "0.5%"}}>
                        <CardHeader><Typography variant="h5" align="center">Completed Jobs</Typography></CardHeader>
                        <CardBody style={{padding: "0.5%"}}>
                            <this.renderTable name="Completed Jobs" mapped={this.props.Jobs.past} func={this.completedJobCell}/>
                        </CardBody>
                    </Card>
                    <Card style={{width: "48%", margin: "0.5%"}}>
                        <CardHeader><Typography variant="h5" align="center">Upcoming Jobs</Typography></CardHeader>
                        <CardBody style={{padding: "0.5%"}}>
                            <this.renderTable name="Upcoming Jobs" mapped={this.props.Jobs.upcoming} func={this.activeJobCell}/>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const { Auth, User, Jobs, JobBoard, Form }  = state;
    return { Auth, User, Jobs, JobBoard, Form }
}
export default connect(mapStateToProps,{
    getCurrentInfo : actions.userActions.getCurrentInfo,
    getActiveJobList : jobActions.userJobActions.getActiveJobList,
    getUpcomingJobList : jobActions.userJobActions.getUpcomingJobList,
    getAllJobListings : jobListActions.jobListingActions.fetchAllJobListings,
    getPastJobList : jobActions.userJobActions.getPastJobList,
    formChanged,
    handleSubmit: jobListingActions.submitReview,
    acceptSitter: jobListingActions.acceptSitter,})(Dashboard);
