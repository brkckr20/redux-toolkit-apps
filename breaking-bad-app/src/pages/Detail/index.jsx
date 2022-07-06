import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const { char_id } = useParams();

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setChar(data[0]))
            .finally(() => setLoading(false));
    }, [char_id]);
    return (
        <div>
            {
                loading && <div>Loading...</div>
            }
            {
                char && (
                    <div>
                        <h1>{char.name}</h1>
                        <div style={{ maxWidth: "500px" }}>
                            <img src={char.img} alt="chart" style={{ width: "50%" }} />
                        </div>
                        {
                            char && (
                                <pre>
                                    {
                                        JSON.stringify(char, null, 2)
                                    }
                                </pre>
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Detail