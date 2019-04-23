import React from 'react';
import { Badge, Card, CardImg, CardBody, Button, Label } from 'reactstrap';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import Rating from 'react-rating';
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import FormValidator from "../common/FormValidator";

export function isSitterBadge(isSitter) {
    return isSitter === true  ? "Sitter" : "Client";
}

export function onClick(event)
{
    return event.target.value === "sitter" ? true : false;
}

export const ProfileCard  = props => {
    return (
        <Card>
            <CardImg style={{padding: "1%"}} top width="50%" height="280"  src="https://source.unsplash.com/random" alt="Card image cap" />
            <CardBody style={{padding: "5%", margin: "1%"}}>
                {props.isEditable ? (
                    <>
                    <AvForm>
                        <Label> User Status: </Label>
                        <RadioGroup onChange={event => props.formChanged({type: "sitter", value: onClick(event)})}>
                            <FormControlLabel value="client"  control={<Radio />} label="Client" />
                            <FormControlLabel value="sitter" control={<Radio />} label="Sitter" />
                        </RadioGroup>
                        <Label> Full Name: </Label>
                        <AvField name="profilefirstName" type="text" defaultValue={props.user.firstName} errorMessage="Please enter a valid name (letters and spaces only)"
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z ]+$'},
                                minLength: {value: 1},
                                maxLength: {value: 30}
                            }}
                            onChange={text => props.formChanged({type: "profilefirstName", value: text.target.value})}/>
                        <AvField name="profilelastName" type="text" defaultValue={props.user.lastName} errorMessage="Please enter a valid name (letters and spaces only)"
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z ]+$'},
                                minLength: {value: 1},
                                maxLength: {value: 30}
                            }}
                            onChange={text => props.formChanged({type: "profilelastName", value: text.target.value})}/>
                        <AvField name="profileemail" label="Email: " type="email" defaultValue={props.user.email} errorMessage="Please enter a valid email (example@example.com)"
                            validate={{required: {value: true}, email: true}}
                            onChange={text => props.formChanged({type: "profileemail", value: text.target.value})}/>
                        <AvField name="profilecity" label="City: " type="text" defaultValue={props.user.address.city} errorMessage="Please enter a valid city (letters and spaces only)"
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z ]+$'},
                                minLength: {value: 1},
                                maxLength: {value: 30}
                            }}
                            onChange={text => props.formChanged({type: "profilecity", value: text.target.value})}/>
                        <AvField name="profilestate" label="State: " type="text" defaultValue={props.user.address.state} errorMessage="Please enter a valid state code (2 capital letters)"
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Z]+$'},
                                minLength: {value: 2},
                                maxLength: {value: 2}
                            }}
                            onChange={text => props.formChanged({type: "profilestate", value: text.target.value})}/>
                        <AvField name="profilezipcode" label="ZIP Code: " type="text" defaultValue={props.user.address.zipCode} errorMessage="Please enter a valid ZIP code (5 numbers)"
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[0-9]+$'},
                                minLength: {value: 5},
                                maxLength: {value: 5}
                            }}
                            onChange={text => props.formChanged({type: "profilezipcode", value: text.target.value})}/>
                        <Button style={{margin: "1%", marginTop: "5%"}} color="primary" block size="sm" onClick={() => props.submitChanges(props.jwt.jwt, {username: props.user.username, email: props.form.profileemail, firstName: props.form.profilefirstName, 
                                                                                                                                                            lastName: props.form.profilelastName, bio: props.form.bio, jwt: props.user.jwt, 
                                                                                                                                                            accountProperties: { sitter: props.form.sitter, jobsCompleted:props.user.accountProperties.jobsCompleted, rating: props.user.accountProperties.rating }, 
                                                                                                                                                            address: { city: props.form.profilecity, state: props.form.profilestate, zipCode: props.form.profilezipcode},  pets: props.user.pets})}>
                            Submit Changes</Button>
                        <Button style={{margin: "1%"}} onClick={props.handler} color="danger" block size="sm">Cancel</Button>
                    </AvForm>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" > <b>Username: </b> {props.externalUser.username}{" "}
                            <Badge pill color="info">{isSitterBadge(props.externalUser.accountProperties.sitter)}</Badge>
                        </Typography>
                        <Typography variant="h6" > <b>Full Name: </b>{props.externalUser.firstName} {props.externalUser.lastName} </Typography>
                        <Typography variant="h6"> <b>Email:</b> {props.externalUser.email}</Typography>
                        <Typography variant="h6"> <b>Location: </b> {props.externalUser.address.city}, {props.externalUser.address.state} {props.externalUser.address.zipCode} </Typography>
                        <Typography variant="h6"><b>Average Rating:</b>
                            {props.externalUser.accountProperties.rating === 0 ? 
                              (<> <Badge color="light"> No Ratings Yet </Badge> </>) 
                            : (<><Rating readonly={true} initialRating={props.externalUser.accountProperties.rating}
                                emptySymbol={<i style={{marginLeft: "5px"}} className="fa fa-paw"/>}
                                fullSymbol={<i style={{color: "#FBBC05", marginLeft: "5px"}} className="fa fa-paw" />}/>
                                <Badge color="light"> ({props.externalUser.accountProperties.rating.toPrecision(3)}/5) </Badge></>) }
                            
                        </Typography>
                        <br />
                        {props.isThisUser ? (
                            <Button block size="sm" color="info" outline onClick={props.handler} >Edit Profile Information</Button>
                        ) : (
                            <>
                                <Button block size="sm" color="primary">Request Job From Sitter</Button>
                            </>
                        )}
                    </>
                )}

            </CardBody>
        </Card>
    );
}

