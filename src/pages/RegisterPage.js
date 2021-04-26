import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/Auth.Context'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const RegisterPage = () => {

    const reg = useContext(AuthContext)
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', name: ''
    })
    const history = useHistory()
    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()

    }, [error, clearError, message])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            
            console.log(form)
            const resp = await request('/api/register', 'POST', { ...form })
            message(`success: ${resp.success}; user email: ${resp.userEmail}`, )
            history.push('/login')

        } catch (error) {
            console.log('err: ', error.message)
        }

    }

    return (
        <div>
            <h1>Register Page</h1>
            <div className="register-card">
                <span>Registration</span>
                <div className="input-field-reg">
                    <input
                        placeholder="Email"
                        id="email"
                        type='text'
                        name='email'
                        value={form.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="input-field-reg">
                    <input
                        placeholder='Password'
                        id='password'
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={changeHandler}
                    />
                </div>
                <div className="input-field-reg">
                    <input
                        placeholder='Name'
                        id='name'
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="reg-btns">
                    <button onClick={registerHandler} disabled={loading}>register</button>
                    <button><NavLink to="/login">login?</NavLink></button>
                    {/*Позже убрать тег баттон и 
                просто задать стили кнопки для нав линка
                сделал тег баттон вначале, чтоб видно было кнопку */}
                </div>
            </div>
        </div>
    )
}