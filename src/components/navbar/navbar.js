import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.Context'
import { navItems } from './navItems'


export const NavBar = (props) => {

    //const auth = props.auth
    const auth = useContext(AuthContext)
    const [active, setActive] = useState(0)

    const selectActiveHandler = index => {
        setActive(index)
        console.log('index: ', index)
    }
    const checkActive = (location, match) => {
        console.log(location)
        console.log(match)
        if (!location || !match) return false
        const { pathname } = location
        const { url } = match
        return pathname === url ? true : false
    }


    if (auth.token) {
        //console.log('qwe')
        return (
            <div className="NavbarItems">
                <span className="navbar-logo">Store name</span>
                {/*можно попробовать в теге спан вместо h1*/}
                {/* <div className="menu-icon">

                </div> */}
                <ul>
                    {navItems.map((item, index) => {
                        return (
                            <li key={index+item.title}
                            >
                                <NavLink exact to={`${item.url}`} activeClassName='activeItems' isActive={checkActive}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    {auth.role === 1 &&
                        <li key={3+"Create"}
                            >
                            <NavLink exact to='/create'>
                                Create
                            </NavLink>
                        </li>}
                </ul>
            </div>
        )
    } else {

        return (
            <div className="NavbarItems">
                <span className="navbar-logo">Store</span>
                <ul>
                    <li className="activeItems">
                        <NavLink to={`${navItems[0].url}`}>
                            {navItems[0].title}
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}
