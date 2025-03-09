import React, { Component } from 'react'
import EventsClass from './EventsClass'

export class NestingComponents extends Component {
  constructor(props) {
    super(props)
    this.state={
      isLoggedIn: false,
    }
  }

  handleSignIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
    console.log(this)
  }

  render() {
    return(
      <div>
        <EventsClass
          isLoggedIn={this.state.isLoggedIn} 
          handleSignIn={this.handleSignIn}
        />
      </div>
    )
  }
}



export default NestingComponents

