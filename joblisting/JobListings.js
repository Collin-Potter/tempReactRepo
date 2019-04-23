import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Card, CardHeader, CardBody, Button, Container, Row, Col, ListGroup } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { handleAddNewJobButton, handleRequestJobButton, formChanged } from '../common/actions/ButtonActions'
import * as actions from "./JobListingActions";
import FormValidator from "../common/FormValidator";
var moment = require('moment');

class JobListings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentWillMount(){
        this.props.getAllJobListings(this.props.Auth.user);
    }

    handleSubmit(event){
        let startISOTime = moment(event.startDate + " " + event.startTime).format()
        let endISOTime = moment(event.endDate + " " + event.endTime).format()
        if(FormValidator.validateStartTime(startISOTime) && FormValidator.validateEndTime(endISOTime, startISOTime) && FormValidator.validateDescription(event.details, true)){
            this.props.handleAddNewJobButton(this.props.Auth.user, {
                                            clientUsername: this.props.Auth.user.username,
                                            startTime: startISOTime,
                                            endTime: endISOTime,
                                            details: event.details,
                                            atClientAddress: false
            });
            window.location.reload();
        }
        else{
            alert("Invalid submisison, please ensure all fields meet guidelines")
        }
    }
    
    renderCards(jobList, user){
        return (
            <ListGroup flush as="ul" style={{height: "800px", overflow : "scroll", overflowX : "hidden", width: "100%"}}>
                {jobList.map(job => {return job.taken === false ? 
                    <Card key={job.id} style={{backgroundColor: "#f8f9fa", margin: "1%"}}>
                        <CardHeader>
                            <Row>
                                <Avatar style={{ width: "50px", height: "50px"}} alt="Tigger" 
                                    src="https://images.unsplash.com/photo-1542239059-4cc19569cbdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                <Col><Typography  variant="h6" style={{margin: "1%"}}> <b>Client: </b> {job.clientUsername}</Typography></Col>
                                <Col><Typography  align="right" variant="h6" style={{margin: "1%"}}>{job.applicants.some(applicant => applicant === user.username) ? (<b>(Job Requested)</b>) : (<></>)}</Typography></Col> 
                                {/* <Col><Typography  align="right" variant="h6" style={{margin: "1%"}}>{job.taken ? (<><b>Taken by Sitter: </b> {job.sitterUsername}</>) : (<></>)}</Typography></Col>  */}
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col><Typography  variant="h6"><b>Start Time: </b> {moment(job.startTime).format('M/D/YY hh:mm A')}</Typography></Col>
                                <Col><Typography  variant="h6"><b>End Time: </b> {moment(job.endTime).format('M/D/YY hh:mm A')}</Typography></Col>
                            </Row>
                            <Typography  variant="h6"><b>Details: </b> {job.details}</Typography>
                        </CardBody>
                        <CardActions>
                            {job.taken === false && user.accountProperties.sitter === true && job.clientUsername !== user.username && job.applicants.some(applicant => applicant === user.username) === false ? 
                            (<Button color="info" onClick={() => this.props.handleRequestJobButton(job, this.props.Auth.user)}>Request Job</Button>) : (<></>) }
                            
                        </CardActions>
                    </Card>: null})}
            </ListGroup> );
    }


    render() {
        console.log("props",this.props)
        console.log("a",this.props.User.currentUser.accountProperties.sitter)


        return (
            <Container>
                <Row>
                    {/* <Row style={{margin: "0 auto"}}>
                        <img height={400} width={700} 
                            src={"https://images.unsplash.com/photo-1501017444490-800ba575ff37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"} alt="Logo" />
                    </Row> */}
                    <AvForm>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>
                                <Typography variant="h6"> Create Job Listing </Typography>
                                <Typography variant="caption"> Don't wanna leave your pet alone? Find a sitter! </Typography>
                            </ModalHeader>
                        <ModalBody>
                            <AvField name="newPostStartDate" label="Start Date" type="date" required errorMessage="Please enter a valid date (no earlier than today)"
                                onChange={text => this.props.formChanged({type: "newPostStartDate", value: text.target.value})}
                                validate={{ required: {value: true},
                                    dateRange: {start: {value: 0, units: 'days',}, end: {value: 1, units: 'years',}}}}/>
                            <AvField name="newPostStartTime" label="Start Time" type="time" required errorMessage="Please enter a valid time (no earlier than an hour from the current time)"
                                onChange={text => this.props.formChanged({type: "newPostStartTime", value: text.target.value})}
                                validate={{ required: {value: true}}}/>
                            <AvField name="newServiceEndDate" label="End Date" type="date" required errorMessage="Please enter a valid date (no earlier than the start date)"
                                onChange={text => this.props.formChanged({type: "newServiceEndDate", value: text.target.value})}
                                validate={{ required: {value: true},
                                    dateRange: {start: {value: 0, units: 'days',}, end: {value: 1, units: 'years',}}}}/>
                            <AvField name="newServiceEndTime" label="End Time" type="time" required errorMessage="Please enter a valid time (no earlier than an hour from the start time)"
                                onChange={text => this.props.formChanged({type: "newServiceEndTime", value: text.target.value})}
                                validate={{ required: {value: true}}}/>
                            <AvField name="newServiceDetails" label="Additional Job Details: " type="textarea" rows="5" placeholder="Tell us a little more about the job..." errorMessage="Please provide a description comprised of letters, numbers, and standard punctuation (. , ; : ! ?)" 
                                validate={{ required: {value: true},
                                    pattern: {value: '^[A-Za-z0-9,.!?;: ]+$'},
                                    minLength: {value: 1},
                                    maxLength: {value: 255}
                                }} 
                                onChange={text => this.props.formChanged({type: "newServiceDetails", value: text.target.value})}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button size="small" color="primary" block onClick={() => this.handleSubmit({startDate: this.props.Form.newPostStartDate, startTime: this.props.Form.newPostStartTime, endTime: this.props.Form.newServiceEndTime, endDate: this.props.Form.newServiceEndDate, details: this.props.Form.newServiceDetails})}>
                                Submit Job </Button>
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </AvForm>
                </Row>
                <Typography variant="h4" align="center">Current Job Listings: 
                    <Button size="lg" color="none" onClick={this.toggle}><i className="far fa-plus-square" /></Button>
                </Typography>
                <Row>
                    {this.renderCards(this.props.JobBoard.jobList, this.props.User.currentUser)}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { Auth, JobBoard, Form, User}  = state;
    return { Auth, JobBoard, Form, User }
}
export default connect(mapStateToProps, {
    handleAddNewJobButton,
    handleRequestJobButton,
    getAllJobListings : actions.jobListingActions.fetchAllJobListings,
    formChanged}) (JobListings);
