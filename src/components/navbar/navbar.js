import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems'


//class NavBar extends Component {
export const NavBar = (props) => {
    const auth = props.auth
    //extends Component что значит, что дает) дает this
    //render() {
    return (
        <nav className="NavbarItems">
            <span className="navbar-logo">Store</span>
            {/*можно попробовать в теге спан вместо h1*/}
            {/* <div className="menu-icon">

                </div> */}
            <ul>
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={`${item.url}`}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <div>
                {() => {
                    if (auth) {
                        return (
                            <div>
                                <button>logout</button>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <button>login</button>
                                <button>registration</button>
                            </div>
                        )
                    }
                }}
            </div>
        </nav>
    )
    //}
}

//export default NavBar