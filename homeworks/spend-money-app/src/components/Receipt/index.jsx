import React from 'react'
import { useSelector } from 'react-redux';
const Receipt = () => {
    const data = useSelector(state => state.spend.basket)
    console.log("Sepet : ", data)
    return (
        <div className='bg-white'>
            <h4 className='text-center'>Your Receipt</h4>
            <div className='row'>
                <div className="col-lg-4 offset-4">
                    <table className="table table-sm text-center">
                        <tbody>
                            <tr>
                                <td>name gelecek</td>
                                <td>adet gelecek</td>
                                <td>adet bazlı toplam fiyat gelicek</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h6>Total : </h6>
                </div>
            </div>
        </div>
    )
}

export default Receipt