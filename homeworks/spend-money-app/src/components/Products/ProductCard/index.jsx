import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../../../redux/spendMoneySlice'
// import { useState } from 'react';

const ProductCard = () => {


    const data = useSelector(state => state.spend.items);
    const dispatch = useDispatch();


    const buyItem = (id, price, amount) => {
        dispatch(addItems({ amount: amount, price: price, id: id }))
    }

    return (
        <>
            <div className='row'>
                {
                    data.map((item) => (
                        <div key={item.id} className="col-lg-3 p-0 mb-2">
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
                                        <input style={{ maxWidth: "50px", margin: "0 5px" }} value={item.amount} onChange={() => { }} type="text" />
                                        <button
                                            onClick={() => buyItem(item.id, item.price, item.amount)}
                                            className='btn btn-sm btn-success rounded-0'>Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default ProductCard