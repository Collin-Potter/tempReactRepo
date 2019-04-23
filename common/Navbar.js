import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class MyNavbar extends Component {

    handleLogout(){
        console.log("log")
        localStorage.clear();
    }


    renderLinks(isVisible){
        if(isVisible){
            return(
                <div className={"row"}>
                    <Nav>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Services
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink href="/searchsitter">Find a Sitter</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink href="/joblisting">Job Listings</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href={"/profile/" + this.props.Auth.user.username}>My Profile</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink href="/dashboard">Dashboard</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    My Account
                                </DropdownItem>
                                <DropdownItem>
                                    Settings
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink onClick={this.handleLogout} href="/" >Logout</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </div>
            )
        }else
            return <div>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem> </div>
    }

    render() {

        return (
            <div style={{paddingBottom: 20}}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <i style={{ margin: "5%" }} className="fa fa-paw" />
                            Tempeturs
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={true} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.renderLinks(this.props.Auth.loggedIn)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { Auth, User }  = state;
    return { Auth, User }
}
export default connect(mapStateToProps,{})(MyNavbar);
