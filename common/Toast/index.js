import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    right: 16px;
    top: ${props => props.top}px;
    right: 50%;
    z-index: 999;
    transition: top 0.5s ease;
`;

export default class ToastNotifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: -100,
        };
    }

    onShow = () => {

    }

    showNotification = () => {
        this.setState({
            top: 16,

        });
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={this.showNotification}> Click Me </button>
                <Container top = {this.state.top}>
                    Example Text
                </Container>
            </React.Fragment>
        );
    }
}