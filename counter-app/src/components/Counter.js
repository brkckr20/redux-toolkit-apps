import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'; //state verilerini okumak için
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice'; // aksiyonların kullanılması için

const Counter = () => {

    const [amount, setAmount] = useState(0);

    const countValue = useSelector(state => state.counter.value); //state'te tanımlı olan value değerini yakalamak
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(increment())}>+</button> {" - "}
            <button onClick={() => dispatch(decrement())}>-</button>
            <br />
            <br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(amount))}>Verilen değer kadar arttır.</button>
        </div>
    )
}

export default Counter