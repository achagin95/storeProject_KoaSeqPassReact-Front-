import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.Context'
import { navItems } from './navItems'


export const NavBar = (props) => {

    //const auth = props.auth
    const auth = useContext(AuthContext)
    const [active, setActive] = useState(null)

    const selectActiveHandler = index => {
        setActive(index)
        console.log('index: ', index)
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
                            <li key={index}
                                className={active === index ? 'activeItems' : ''}
                                onClick={() => selectActiveHandler(index)}
                            >
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
