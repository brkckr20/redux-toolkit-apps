import React from 'react'
import { useSelector } from 'react-redux';

const NoteList = () => {
    const notes = useSelector(state => state.notes.items);

    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    notes.map(note => (
                        <div key={note.id} className={`col-3 mb-2 p-3  b-${note.color}`}>
                            {note.name}
                        </div>
                    ))
                }
                {
                    notes.length < 1 && (
                        <div className='alert alert-warning'>Not bulunmuyor. Not giriniz...</div>
                    )
                }

            </div>
        </div>
    )
}

export default NoteList