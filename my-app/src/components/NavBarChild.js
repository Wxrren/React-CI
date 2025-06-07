import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <button onClick={props.handleClick}>Login</button>
        :
        <form>
            <label htmlFor = "username">Username:</label>
            <input 
                value={props.name}
                onChange={props.handleNameChange}
                placeholder="username"
                id="username"
                name="username"
                type="text"
            />
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            <button type="submit" onClick={props.handleClick}>Submit</button>
        </form>
    )
}

export default NavBarChild
