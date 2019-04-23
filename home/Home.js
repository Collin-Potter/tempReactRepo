import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button, Container, Col, Row } from "reactstrap";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron
              style={{
                height: 525,
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1484329685472-7be8fb281ce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")'
              }}
            >
              <h1 className="display-3">Hi, Welcome!</h1>
              <p className="lead">
                Our mission is to connect pet owners with pet service providers
              </p>
              <hr className="my-2" />
              <p>Register today to become a Tempetur!</p>
              <p className="lead" />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron style={{ backgroundColor: "white" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ minHeight: "275px", backgroundColor: "#f8f9fa" }}>
                        <CardContent>
                          <Typography color="inherit" variant="h5" align="center" gutterBottom>
                            Who We Are
                          </Typography>
                          <Typography component="p" color="inherit">
                            I will take some magic white, and a little bit of
                            Vandyke brown and a little touch of yellow. Let the
                            paint work. I'm gonna start with a little Alizarin
                            crimson and a touch of Prussian blue. Absolutely no
                            pressure. You are just a whisper floating across a
                            mountain. Everything is happy if you choose to make
                            it that way.
                            <br />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ minHeight: "275px", backgroundColor: "#f8f9fa" }}>
                        <CardContent>
                        <Typography color="inherit" variant="h5" align="center" gutterBottom>
                            What We Do
                          </Typography>
                          <Typography component="p" color="inherit">
                            You can do anything your heart can imagine. The
                            least little bit can do so much. But they're very
                            easily killed. Clouds are delicate. See how easy it
                            is to create a little tree right in your world. Put
                            your feelings into it, your heart, it's your world.
                            <br />
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button block color="info" href="/login">
                            Register Today!
                          </Button>
                        </CardActions>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ minHeight: "275px", backgroundColor: "#f8f9fa" }}>
                        <CardContent>
                          <Typography color="inherit" variant="h5" align="center" gutterBottom>
                            How We Do It
                          </Typography>
                          <Typography component="p" color="inherit">
                            Follow the lay of the land. It's most important.
                            Nothing's gonna make your husband or wife madder
                            than coming home and having a snow-covered dinner.
                            Life is too short to be alone, too precious. Share
                            it with a friend.
                            <br />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { User } = state;
  return { User };
};
export default connect(
  mapStateToProps, {})(Home);
