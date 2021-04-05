import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import {DetailGoodPage} from '../pages/detailGoodPage'
import {OrderPage} from '../pages/orderPage'
import {ProfilePage} from '../pages/profilePage'
import {StorePage} from '../pages/storePage'
//import {navItems} from './navbar/navItems'



export const useRoutes = isAuth => {
    //позже добавить другие роуты если надо
    //главное добавить проверку на авторизованность
    return (
        <Switch>
            <Route path="/" exact>
                <StorePage />
            </Route>
            <Route path="/orders" exact>
                <OrderPage />
            </Route>
            <Route path="/profile" exact>
                <ProfilePage />
            </Route>
            <Route path="/detail/:id" exact>
                <DetailGoodPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}