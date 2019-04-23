import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import Rating from 'react-rating';
// import * as actions from "../common/actions/UserActions"


class UserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        }
    }

    renderReviews(Reviews){
        const rev = Reviews.map(review =>
            <Card key={review.id} style={ {backgroundColor: "#f8f9fa", margin: "2%"} }>
                <CardHeader style={{padding: "0%"}}> ({review.rating}/5)
                    <Rating readonly={true} initialRating={review.rating}
                                        emptySymbol={<i style={{margin: "5px"}} className="fa fa-paw"/>}
                                        fullSymbol={<i style={{color: "#FBBC05", margin: "5px"}} className="fa fa-paw" />}/>
                </CardHeader>
                <CardBody> {review.details} </CardBody>
                <CardFooter style={{padding: "0.5%", textAlign: "center"}}> By: {review.author} </CardFooter>
            </Card>
        );
        return rev;
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        console.log("me details", this.props)
        return (
            <div style={{paddingBottom: 20}}>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                            About Me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                            Reviews
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <Card style={ { margin: "1%", backgroundColor: "#f8f9fa", padding: "2%" } } >
                        <p>
                            Put your feelings into it, your heart, it's your world. Let's just drop a little Evergreen right here. Mix your color marbly don't mix it dead. 
                            Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. 
                            I'm sort of a softy, I couldn't shoot Bambi except with a camera. We'll put a happy little bush here.
                            This is your world. Every highlight needs it's own personal shadow. Isn't that fantastic that you can make whole mountains in minutes? 
                            Work on one thing at a time. Don't get carried away - we have plenty of time. The least little bit can do so much. See. 
                            We take the corner of the brush and let it play back-and-forth.
                        </p>
                    </Card>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row  >
                            {this.renderReviews(this.props.Reviews.list)}
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { Reviews }  = state;
    return { Reviews }
};

export default connect(mapStateToProps,{})(UserDetails)