import React from 'react'

const Error = ({ message }) => {
    return (
        <div style={{ padding: 15, fontSize: 16, color: "red" }}>Error : {message}</div>
    )
}

export default Error