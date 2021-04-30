import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.Context'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'

export const GoodsList = ({ goodsList, getAllGoods }) => {

    const auth = useContext(AuthContext)
    const history = useHistory()
    const { error, request, clearError } = useHttp()
    const message = useMessage()
    //const role = useContext(AuthContext)
    //const role = JSON.parse(localStorage.userData).role

    const addToCartHandler = id => {
        console.log(id)
        if (!auth.token) {
            history.push('/login')
        }
    }

    const removeItemHandler = async (id) => {
        try {

            console.log(id)
            const warn = window.confirm(`Delete this item?`)
            if (warn) {
                const data = await request(`/api/${id}`, 'DELETE', {}, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
                getAllGoods()
            } else {
                alert('Was not deleted')
            }
        } catch (error) {
            console.log('err: ', error.message)
        }
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [message, error, clearError])

    if (goodsList.length === 0 || !goodsList) {
        return (
            <div> No goods yet </div>
        )
    }

    return (

        <div className='allgoods'>
            {
                goodsList.map((item) => {
                    return (
                        <div className='good-item' key={item.id}>
                            <div className='good-item-name'>Name: {item.goodname}</div>
                            <div className='good-item-image'>*image*</div>
                            <div className='good-item-price'>Price: {item.goodprice}</div>
                            <div className='good-item-count'>Count: {item.goodcount}</div>
                            <button onClick={() => addToCartHandler(item.id)} className='good-item-btn'>add to cart</button>
                            <NavLink className="btn" to={`/detail/${item.id}`}>detail</NavLink>
                            {auth.token && auth.role === 1 && <button onClick={() => removeItemHandler(item.id)}>remove item</button>}
                        </div>
                    )
                })
            }

        </div>
    )
}