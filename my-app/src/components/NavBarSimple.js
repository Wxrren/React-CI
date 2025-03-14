import React from "react";
import css from "./css/NavBarSimple.module.css";

export default class NavBarSimple extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, guest!',
            buttonText: "Log In"
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            message: prevState.message === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.message))
    }
    
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>
                        {this.state.message}
                    </span>
                    <button onClick={this.handleClick}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}