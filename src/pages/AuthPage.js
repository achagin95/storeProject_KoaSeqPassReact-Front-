import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/Auth.Context'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

//позже добавить контекст(когда он добавится вообще и в апп.джс)

// "proxy": "http://localhost:5000",

export const AuthPage = () => {
    //const auth = useContext(AuthContext)
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            debugger
            console.log(form)
            const ctx = await request('/api/login', 'POST', { ...form })
            console.log(ctx)
        } catch (error) {
            console.log('err: ', error)
        }

    }



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