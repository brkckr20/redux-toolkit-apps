import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filteredNote } from '../redux/notes/notesSlice'

const SearchForm = () => {

    const notes = useSelector(state => state.notes.items);
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");



    const handleSearch = (data) => {
        setSearch(data);
        const filtered = notes.filter((item) => {
            return Object.keys(item).some((key) => {
                return item[key].toString().toLowerCase().includes(data.toLowerCase());
            })
        })
        dispatch(filteredNote(filtered));
    }

    return (
        <div className='text-center custom-form-div mt-3'>
            <h1 className='mb-4'>NotesApp</h1>
            <div>
                <input
                    id='custom-form'
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder='Search...'
                    value={search}

                />
            </div>
        </div>
    )
}

export default SearchForm