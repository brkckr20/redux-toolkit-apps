import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Item = ({ item }) => {

    return (
        <div
            className='quote-item'
        >
            <Link to={`/quotes/${item.quote_id}`}>
                <q>{item.quote}</q>
            </Link>
            | <strong>{item.author}</strong>
        </div>
    )
}

export default Item