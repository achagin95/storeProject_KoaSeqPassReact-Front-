import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavButtons = (props) => {
    const auth = props.auth

    if (auth) {
        return (
            <div className="NavBarButtons">
                <button>logout</button>
            </div>
        )
    } else {
        return (
            <div className="NavBarButtons">
                <button><NavLink to="/login">login</NavLink></button>
                <button>registration</button>
            </div>
        )
    }  
}