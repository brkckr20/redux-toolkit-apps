import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice'

//components
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Item from './Item';

const Qutoes = () => {

    const dispatch = useDispatch();
    const data = useSelector(quotesSelector);

    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);
    /* console.log("state", data) */

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllQuotes())
        }
    }, [dispatch, status])

    if (error) {
        return (
            <Error message={error.message} />
        )
    }

    return (
        <div>
            <h1>Quotes</h1>
            {
                status === "loading" && (<Loading />)
            }
            {
                status === "succeeded" && data.map(item => (
                    <Item key={item.quote_id} item={item} />
                ))
            }
            {
                status === "succeeded" && (
                    <div className='all-quotes'>{data.length} quotes</div>
                )
            }
        </div>
    )
}

export default Qutoes