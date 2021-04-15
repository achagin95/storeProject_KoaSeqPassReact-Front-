import React from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems'


export const NavBar = (props) => {

    const auth = props.auth


    if (auth) {
        console.log('qwe')
        return (
            <div className="NavbarItems">
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
            </div>
        )
    } else {

        return (
            <div className="NavbarItems">
                <span className="navbar-logo">Store</span>
                <ul>
                    <li>
                        <NavLink to={`${navItems[0].url}`}>
                            {navItems[0].title}
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}
