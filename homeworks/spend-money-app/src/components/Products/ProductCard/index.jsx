import React, { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { useSelector } from 'react-redux';
const ProductCard = () => {

    const [value18, setValue18] = useState(0);

    const data = useSelector(state => state.spend.items)

    return (
        <>
            <div className='row'>
                {
                    data.map((item) => (
                        <div key={item.id} className="col-lg-3 p-0">
                            <div className='bg-white px-1 pb-2 mx-2'>
                                <div className='product-card-img'>
                                    <img src={item.imageUrl} alt="https://neal.fun/spend/images/big-mac.jpg" />
                                </div>
                                <h4 className='text-center'>{item.name}</h4>
                                <h6 className='text-success text-center'>${item.price}</h6>
                                <div className='bottom-inputs'>
                                    <div className="field col-12 md:col-3">
                                        <InputNumber inputId="horizontal" value={value18} onValueChange={(e) => setValue18(e.value)} showButtons buttonLayout="horizontal" step={1}
                                            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="USD" />
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