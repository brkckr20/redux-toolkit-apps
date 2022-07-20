import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';

const Products = () => {

    const data = useSelector(state => state.spend.items);
    return (
        <div className='mt-2 container'>
            {
                <>
                    <div className="row">
                        {
                            data.map((item, index) => (

                                <ProductCard key={index} item={item} />

                            ))
                        }
                    </div>

                </>
            }
        </div>
    )
}

export default Products