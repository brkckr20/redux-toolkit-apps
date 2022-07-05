import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice'

const NoteForm = () => {

    const dispatch = useDispatch();

    const [note, setNote] = useState("");
    const [color, setColor] = useState("");

    const handleChangeColor = (color) => {
        setColor(color);
    }

    const handleSubmit = async () => {
        dispatch(addNote({ id: nanoid(), name: note, color: color }));
        setNote("");
    }

    return (
        <div className='mt-5'>
            <div className='text-center'>
                <textarea placeholder='Enter your note here...' value={note} onChange={e => setNote(e.target.value)}>{note}</textarea>
            </div>
            <div className='color-list d-flex justify-content-between align-items-center'>
                <div>
                    <input onChange={() => handleChangeColor("pink")} type="radio" className='b-pink' name='color-list' />
                    <input onChange={() => handleChangeColor("purple")} type="radio" className='b-purple' name='color-list' />
                    <input onChange={() => handleChangeColor("yellow")} type="radio" className='b-yellow' name='color-list' />
                    <input onChange={() => handleChangeColor("blue")} type="radio" className='b-blue' name='color-list' />
                    <input onChange={() => handleChangeColor("green")} type="radio" className='b-green' name='color-list' />
                </div>
                <button onClick={handleSubmit} className='btn btn-success rounded-0'>ADD</button>
            </div>
        </div>
    )
}

export default NoteForm