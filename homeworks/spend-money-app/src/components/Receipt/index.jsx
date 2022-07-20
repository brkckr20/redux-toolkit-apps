import React from 'react'
import { useSelector } from 'react-redux';
const Receipt = () => {
    const basket = useSelector(state => state.spend.basket)
    /* console.log("Sepet : ", basket); */

    const sumPrice = basket.map(item => item.price * item.amount).reduce((prev, curr) => prev + curr, 0);
    return (
        <div className='bg-white p-4'>
            <h4 className='text-center'>Your Receipt</h4>
            <div className='row'>
                <div className="col-lg-4 offset-4">
                    {
                        basket.length > 0 ? (
                            <table className="table table-sm text-center">
                                <tbody>
                                    {
                                        basket.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.amount}x</td>
                                                <td>${Number(item.amount * item.price)}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        ) : <div className='alert alert-info'>Receipt is null!</div>
                    }
                    {
                        basket.length > 0 && (
                            <>
                                <hr />
                                <h6 className='text-center'>Total : ${sumPrice}</h6>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Receipt