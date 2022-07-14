import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../../../redux/spendMoneySlice'
import { useState } from 'react';

const ProductCard = ({ item }) => {

    const [count, setCount] = useState(0)

    const basket = useSelector(state => state.spend.basket);
    const dispatch = useDispatch();


    const buyItem = (id) => {
        setCount(Number(count) + 1)
        dispatch(addItems({ id: id, amount: count }));

    }

    return (
        <>
            <div className="col-lg-3 p-0 mb-2">
                <div className='bg-white px-1 pb-2 mx-2'>
                    <div className='product-card-img'>
                        <img src={item.imageURL} alt={item.imageURL} />
                    </div>
                    <h4 className='text-center'>{item.name}</h4>
                    <h6 className='text-success text-center'>${item.price}</h6>
                    <div className='bottom-inputs'>
                        <div className="field col-12 md:col-3">
                            <button
                                className='btn btn-sm btn-light rounded-0'

                            >Sell</button>

                            <input
                                style={{ maxWidth: "50px", margin: "0 5px" }}
                                value={count}
                                onChange={() => { }}
                                type="text"
                            />
                            <button
                                onClick={() => buyItem(item.id)}
                                className='btn btn-sm btn-success rounded-0'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard