import React from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ListGroupItem,
    ListGroup,
    Row,
    Col,
    Card,
    CardTitle
} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';

const ListOfUpcomingJobs = (jobs) => {
    const listJobs = jobs.upcoming.map(job =>
        <ListGroupItem key={job.id}>
            <div styles={{justifyContent: "column"}}>
                <label> Client: {job.clientUsername} </label><br />
                <label> Sitter: {job.sitterUsername} </label><br />
                <label> Start Service: {job.startTime} </label><br />
                <label> End Service: {job.endTime}</label><br />
                <label> Care Details: {job.details} </label><br />
            </div>
        </ListGroupItem>
    );
    return( <ListGroup> {listJobs} </ListGroup> );
}

const ListOfPastJobs= (jobs) => {
    const listJobs = jobs.past.map(job =>
        <ListGroupItem key={job.id}>
            <div styles={{justifyContent: "column"}}>
                <label> Client: {job.clientUsername} </label><br />
                <label> Sitter: {job.sitterUsername} </label><br />
                <label> Start Service: {job.startTime} </label><br />
                <label> End Service: {job.endTime}</label><br />
                <label> Care Details: {job.details} </label><br />
            </div>
        </ListGroupItem>
    );
    return( <ListGroup> {listJobs} </ListGroup> );
}


class UpcomingAndRecentJobs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div style={{paddingBottom: 20}}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Upcoming
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Recently Completed
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card>
                                <Card>
                                    {ListOfUpcomingJobs(this.props.jobs)}
                                </Card>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card>
                                    {ListOfPastJobs(this.props.jobs)}
                                </Card>
                            </Col>
                            <ListGroup>

                            </ListGroup>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { User }  = state;
    return { User }
};

export default connect(mapStateToProps,{})(UpcomingAndRecentJobs)