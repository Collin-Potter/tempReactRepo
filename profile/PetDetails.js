import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, ListGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { handleAddNewPetButton, handleEditPetButton, handleDeletePetButton, formChanged } from '../common/actions/ButtonActions'
import Typography from "@material-ui/core/Typography";
import FormValidator from "../common/FormValidator";


class PetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalListItemEdit: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleEditListItem = this.toggleEditListItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleSubmit(event){
        // alert(`\n${event.petName} ${event.petType} ${event.petDescription}`);
        if ( FormValidator.validateRegularWord(event.petName, true) 
        && FormValidator.validateRegularWord(event.petType, true) 
        && FormValidator.validateDescription(event.petDescription, true)  ) 
        {
            this.toggle();
            this.props.handleAddNewPetButton(this.props.Auth.user, {name: event.petName, type: event.petType, description: event.petDescription});
            //need to clear values on form and in redux
        } else { alert(`Please Enter a Valid Pet Name, Type, and Description\n`); }
    }

    handleEdit(event){
        console.log("E", event)
        if(event.petName === "" && event.petType === "" && event.petDescription === ""){ //no changes made
            alert(`No changes were made!`);
        }
        else{
            if(event.petName === ""){event.petName = this.props.Form.selectedPet.name}
            if(event.petType === ""){event.petType = this.props.Form.selectedPet.type}
            if(event.petDescription === ""){event.petDescription = this.props.Form.selectedPet.petDescription}
            if ( FormValidator.validateRegularWord(event.petName, true) 
             && FormValidator.validateRegularWord(event.petType, true) 
             && FormValidator.validateDescription(event.petDescription, true)  ) 
            {
                this.props.handleEditPetButton(this.props.Auth.user, this.props.Form.selectedPet.name, {name: event.petName, type: event.petType, description: event.petDescription});
                this.toggleEditListItem(event);
            }
            else { alert(`Please Enter a Valid Pet Name, Type, and Description\n`); }
        }
    }

    handleDelete(event){
        this.props.handleDeletePetButton(this.props.Auth.user, event);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleEditListItem(pet) {
        this.setState(prevState => ({
            modalListItemEdit: !prevState.modalListItemEdit,
        }));
        this.props.Form.selectedPet = pet;
    }

    renderPetEditTools(pet, isUser){
        if(isUser)
            return (
                <>
                    <Button size="sm" color="info" outline style={{margin: "0.5%"}} onClick={() => { this.toggleEditListItem(pet)}} > Edit Pet </Button>
                    <Button size="sm" color="danger" outline style={{margin: "0.5%"}} onClick={() => this.handleDelete(pet.name)}> Delete Pet </Button>
                </>
            );
    }

    ListOfPets = (pets, isUser) => {
        const listPets = pets.map(pet =>
            <Card key={pet.name} style={{backgroundColor: "#f8f9fa", margin: "0.5%",  minWidth: "350px"}}>
                <CardBody>
                    <Typography variant="h6"> <b>Pet:</b> {pet.name} </Typography>
                    <Typography variant="h6"> <b>Type:</b> {pet.type} {this.renderPetIcon(pet.type)}</Typography>
                    <Typography variant="h6"> <b>Description:</b> {pet.description} </Typography>
                </CardBody>
                <Typography variant="h6" align="right" style={{margin: "1%"}}> {this.renderPetEditTools(pet, isUser)} </Typography>
            </Card>
        );
        return( <ListGroup flush as="ul" style={{height: "400px", overflow : "scroll", overflowX : "hidden", margin: "1%"}}> {listPets} </ListGroup> );
    }

    renderAddPetButton(user){
        if(user)
            return <Button size="lg" color="none" onClick={this.toggle}><i className="far fa-plus-square" /></Button>
            
    }

    renderPetIcon(type){
        switch(type){
            case "Amphibian":
                return(<i className="fa fa-frog" />);
            case "Bird":
                return(<i className="fa fa-crow" />)
            case "Cat":
                return(<i className="fa fa-cat" />);
            case "Dog":
            return(<i className="fa fa-dog" />);
            case "Fish":
                return(<i className="fa fa-fish" />);
            case "Horse":
                return(<i className="fa fa-horse" />);
            case "Insect":
                return(<i className="fa fa-spider" />);
            case "Reptile":
                return(<i className="fa fa-dragon" />);
            case "Rodent":
                return(<i className="fa fa-otter" />);
            default:
                return(<i className="fa fa-question" />);
        }
    }

    render(){
        return ( 
        <Card>
            <CardTitle style={{margin: "1%", alignContent: "center"}}>
                <Typography variant="h5" align="center">
                    <b>My Pets </b> {this.renderAddPetButton(this.props.isThisUser)}
                </Typography>
            </CardTitle>
            <CardBody style={{padding: "0.5%"}}>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <AvForm>
                        <ModalHeader toggle={this.toggle}>Add New Pet</ModalHeader>
                        <ModalBody>
                            <AvField name="newPetName" label="Pet Name: " type="text" placeholder="Enter your pet's name" errorMessage="Please enter a valid name (letters and spaces only)" 
                                validate={{
                                    required: {value: true},
                                    pattern: {value: '^[A-Za-z ]+$'},
                                    minLength: {value: 1},
                                    maxLength: {value: 30}
                                }} 
                                onChange={text => this.props.formChanged({type: "newPetName", value: text.target.value})}/>
                            <AvField name="newPetType" label="Pet Type: " type="select" errorMessage="Please choose a pet type" 
                                validate={{required: {value: true}}} 
                                onChange={text => this.props.formChanged({ type: "newPetType", value: text.target.value })} >
                                <option>Amphibian</option>
                                <option>Bird</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Fish</option>
                                <option>Horse</option>
                                <option>Insect</option>
                                <option>Reptile</option>
                                <option>Rodent</option>
                                <option>Other</option>
                            </AvField>
                            <AvField name="newPetDescription" label="Pet Description: " type="textarea" rows="3" placeholder="Tell us a little more about your pet..." errorMessage="Please provide a description comprised of letters, numbers, and standard punctuation (. , ; : ! ?)" 
                                validate={{
                                    required: {value: true},
                                    pattern: {value: '^[A-Za-z0-9,.!?;: ]+$'},
                                    minLength: {value: 1},
                                    maxLength: {value: 255}
                                }} 
                                onChange={text => this.props.formChanged({type: "newPetDescription", value: text.target.value})}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" block onClick={() =>
                                this.handleSubmit({petName: this.props.Form.newPetName, petType: this.props.Form.newPetType, petDescription: this.props.Form.newPetDescription})}
                            >Add Pet</Button>
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

                <Modal isOpen={this.state.modalListItemEdit} toggle={this.toggleEditListItem} className={this.props.className}>
                    <AvForm>
                        <ModalHeader toggle={this.toggleEditListItem}>Edit Pet</ModalHeader>
                        <ModalBody>
                            <AvField name="editPetName" label="Pet Name: " type="text" defaultValue={this.props.Form.selectedPet.name} errorMessage="Name can only contain letters and spaces" 
                                validate={{
                                    pattern: {value: '^[A-Za-z ]+$'},
                                    minLength: {value: 1},
                                    maxLength: {value: 30}
                                }} 
                                onChange={text => this.props.formChanged({type: "editPetName", value: text.target.value})}/>
                            <AvField name="editPetType" label="Pet Type: " type="select" errorMessage="Must choose a pet type" 
                                defaultValue={this.props.Form.selectedPet.type}
                                onChange={text => this.props.formChanged({ type: "editPetType", value: text.target.value })} >
                                <option>Amphibian</option>
                                <option>Bird</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Fish</option>
                                <option>Horse</option>
                                <option>Insect</option>
                                <option>Reptile</option>
                                <option>Rodent</option>
                                <option>Other</option>
                            </AvField>
                            <AvField name="editPetDescription" label="Pet Description: " type="textarea" rows="3" defaultValue={this.props.Form.selectedPet.description} errorMessage="Must provide a description comprised of letters, numbers, and standard punctuation (. , ; : ! ?)" 
                                validate={{
                                    pattern: {value: '^[A-Za-z0-9,.!?;: ]+$'},
                                    minLength: {value: 1},
                                    maxLength: {value: 255}
                                }} 
                                onChange={text => this.props.formChanged({type: "editPetDescription", value: text.target.value})}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" block onClick={() =>
                                this.handleEdit({petName: this.props.Form.editPetName, petType: this.props.Form.editPetType, petDescription: this.props.Form.editPetDescription})}
                                    >Save Changes</Button>
                            <Button color="danger" onClick={this.toggleEditListItem}>Cancel</Button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
                {this.ListOfPets(this.props.pets, this.props.isThisUser)}   
            </CardBody>
        </Card>)
    }
}

const mapStateToProps = state => {
    const { Auth, User, Form }  = state;
    return { Auth, User, Form }
}
export default connect(mapStateToProps, { handleAddNewPetButton, handleDeletePetButton, handleEditPetButton, formChanged } )(PetDetails);
