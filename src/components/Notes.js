import React from 'react'
import NoteItem from './NoteItem';

export default function Notes({ type, data, handleDelete, handleArchive }) {
    if (type === "archive") {
        const filter = data.filter((data) => data.archived === true);
        return (
            <div className='notes-list'>
                <NoteItem data={filter} handleDelete={handleDelete} handleArchive={handleArchive} />
            </div>
        );
    } else {
        const filter = data.filter((data) => data.archived === false);
        return (
            <div className='notes-list'>
                <NoteItem data={filter} handleDelete={handleDelete} handleArchive={handleArchive} />
            </div>
        );
    }
}
