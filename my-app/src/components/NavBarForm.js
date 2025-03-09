import React from "react";
import css from "./css/NavBarForm.module.css";

import NavBarChild from "./NavBarChild";

export default class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
          isLoggedIn: prevState.isLoggedIn ? false: true
        }));
        console.log(this)
      }

    render () {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <NavBarChild
                        isLoggedIn={this.state.isLoggedIn}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }
}