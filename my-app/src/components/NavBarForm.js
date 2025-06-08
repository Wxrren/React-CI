import React from "react";
import css from "./css/NavBarForm.module.css";

import NavBarChild from "./NavBarChild";

export default class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            name: '',
        }
    }

    handleClick = (event) => {
        this.setState((prevState) => ({
          isLoggedIn: prevState.isLoggedIn ? false: true
        }));
        console.log(this)
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    render () {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <NavBarChild
                        isLoggedIn={this.state.isLoggedIn}
                        handleClick={this.handleClick}
                        handleNameChange={this.handleNameChange}
                        name={this.state.name}
                    />
                </div>
            </div>
        )
    }
}