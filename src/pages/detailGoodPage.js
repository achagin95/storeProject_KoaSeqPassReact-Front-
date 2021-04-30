import React from 'react'
import {useParams} from 'react-router-dom'

export const DetailGoodPage = (props) => {
    const goodsId = useParams().id

    return (
        <div>
            detailGoodPage
            item id from params: {goodsId}
        </div>
    )
}