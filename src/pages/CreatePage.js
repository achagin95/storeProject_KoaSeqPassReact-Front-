import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../context/Auth.Context'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const {error, clearError, request} = useHttp()
    const message = useMessage()
    const [form, setForm] = useState({
        goodname: "", goodprice: "", goodcount: ""
    })

    useEffect( () => {
        message(error)
        clearError()
    },[message, error, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const submitHandler = async () =>{
        try {
            const warn = window.confirm(`Confirm creating item ${form.goodname} for ${form.goodprice}$`)
            if (warn) {
                
                console.log("Creating")
                const data = await request('/api/create','POST', {...form}, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
                message("created")
                history.push(`/detail/${data.goodsid}`)
                //закончил тут, попробовать функционал!
            } else {console.log("canceled")}
            console.log(form)
        } catch (error) {
            
        }
    }

    return (
        <div>
            <div className="catd-create">
                <div>
                    <input
                        placeholder="Item Name"
                        id="goodname"
                        type="text"
                        name="goodname"
                        value={form.goodname}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        placeholder="Item Price"
                        id="goodprice"
                        type="text"
                        name="goodprice"
                        value={form.goodprice}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        placeholder="Item Count"
                        id="goodcount"
                        type="text"
                        name="goodcount"
                        value={form.goodcount}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <button onClick={submitHandler}>Submit</button>
                </div>


            </div>
        </div>
    )
}