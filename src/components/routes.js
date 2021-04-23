import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { DetailGoodPage } from '../pages/detailGoodPage'
import { NotFoundPage } from '../pages/notFoundPage'
import { OrderPage } from '../pages/orderPage'
import { ProfilePage } from '../pages/profilePage'
import { StorePage } from '../pages/storePage'
import {AuthPage} from '../pages/AuthPage'
import { RegisterPage } from '../pages/RegisterPage'
//import {navItems} from './navbar/navItems'



export const useRoutes = isAuth => {
    //позже добавить другие роуты если надо
    //главное добавить проверку на авторизованность
    if (isAuth) {
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
                <Route path="/404" exact>
                    <NotFoundPage />
                </Route>
                <Redirect to="/404" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/" exact>
                    <StorePage />
                </Route>
                <Route path="/detail/:id" exact>
                    <DetailGoodPage />
                </Route>
                <Route path="/login" exact>
                    <AuthPage />
                </Route>
                <Route path="/register" exact>
                    <RegisterPage />
                </Route>
                <Route path="/404" exact>
                    <NotFoundPage />
                </Route>
                <Redirect to="/404" />
            </Switch>
        )
    }

}