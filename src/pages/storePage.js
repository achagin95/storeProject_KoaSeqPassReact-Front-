import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { GoodsList } from '../components/goods/GoodsList'

export const StorePage = () => {
    const [goods, setGoods] = useState([])
    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()



    const getAllGoods = useCallback(async () => {
        try {
            const data = await request('/api/', 'GET', null, {})
            setGoods(data)
        } catch (error) {

        }
    }, [request])
    // const removeItemHandler =  id => {
    //     console.log(id)
    // }

    useEffect(() => {
        console.log('1')
        message(error)
        clearError()
    }, [error, clearError, message])

    useEffect(() => {
        console.log('2')
        getAllGoods()
    }, [getAllGoods])




    if (loading) {
        return (
            <div> Loading </div>
        )
    }
    return (
        <div className="grid-content">
            <GoodsList goodsList={goods} getAllGoods={getAllGoods} />


        </div>
    )
}