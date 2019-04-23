import React from 'react';
import classnames from 'classnames';
import {
    Card,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from 'reactstrap';

const ListOfJobs = (jobs) => {
    console.log("jobs", jobs);
    const listJobs = jobs.active.map(job =>
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

export const ActiveJobs = props => {
    return <div style={{paddingBottom: 20}}>
        <Nav tabs>
            <NavItem>
                <NavLink>
                    Active
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent>
            <TabPane >
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card>
                                {ListOfJobs(props.jobs)}
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    </div>

}