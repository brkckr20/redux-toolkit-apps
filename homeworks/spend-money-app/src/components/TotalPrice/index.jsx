import React from 'react'
/* import CountUp from 'react-countup'; */
import { useSelector } from 'react-redux';

const TotalPrice = () => {
    const basket = useSelector(state => state.spend.basket);
    const sumPrice = basket.map(item => item.price * item.amount).reduce((prev, curr) => prev + curr, 0);
    return (
        <div className='p-2 mt-2 linear-yellow-background'>
            {/* <h2 className='text-center text-white'>$<CountUp end={100000000000 - sumPrice} /></h2> */}
            <h2 className='text-center text-white'>${100000000000 - sumPrice}</h2>
        </div>
    )
}

export default TotalPrice