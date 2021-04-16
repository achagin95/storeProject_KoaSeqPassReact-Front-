import React from 'react'
import { NavLink } from 'react-router-dom'

//позже добавить контекст(когда он добавится вообще и в апп.джс)

export const AuthPage = () => {


    return (
        <div>
            <div>
                <h1> Auth Page </h1>

            </div>
            <div className="card-auth">
                <span className="card-auth-title">Authorization</span>
                <div className="card-auth-input-field">
                    <input 
                    placeholder="Email"
                    id="email"
                    type="text"
                    name="email"
                    value={form.email} 
                    onChange={changeHandler} />
                </div>
                <div className="card-auth-input-field">
                    <input 
                    placeholder="Password"
                    id="password"
                    type="password"
                    name="password"
                    value={form.password} 
                    onChange={changeHandler} />
                </div>
                <div className="card-auth-action">
                    <button className="card-auth-btn-login" onClick={loginHandler} disabled={loading}>Login</button>
                    <button className="card-auth-btn-notregister" ><NavLink to="/register">Not register?</NavLink></button>
                </div>
            </div>
        </div>
    )
}
//создать функции. Создать страницу регистрации. 
// Добавить роуты на страницу авторизации и на страницу регистрации