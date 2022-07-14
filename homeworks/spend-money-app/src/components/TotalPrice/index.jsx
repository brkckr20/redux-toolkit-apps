import React from 'react'
import CountUp from 'react-countup';

const TotalPrice = () => {
    return (
        <div className='p-2 mt-2 linear-yellow-background'>
            <h2 className='text-center text-white'>$<CountUp end={100000000000} /></h2>
        </div>
    )
}

export default TotalPrice