import React, {useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.Context'

export const NavButtons = (props) => {
    //const auth = props.auth
    const auth = useContext(AuthContext)
    const idUser = auth.userId
    const history = useHistory()
    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    if (auth.token) {
        return (
            <div className="NavBarButtons">
                <NavLink className="btn btn-cart" to={`/cart/${idUser}`}>Cart</NavLink>
                <button className="btn" onClick={logoutHandler}>logout</button>
            </div>
        )
    } else {
        
        return (
            <div className="NavBarButtons">
                <NavLink className="btn" to="/login">login</NavLink>
                <NavLink className="btn" to="/register">registration</NavLink>
                
            </div>
        )
    }  
}