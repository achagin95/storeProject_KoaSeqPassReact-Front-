import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems'


//class Navbar extends Component {
export const NavBar = () => {
    //render() {
    return (
        <nav className="NavbarItems">
            <span className="navbar-logo">Store</span>
            {/*можно попробовать в теге спан вместо h1*/}
            <div className="menu-icon">

            </div>
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
        </nav>
    )
    // }
}

//export default Navbar