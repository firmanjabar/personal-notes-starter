import React from 'react'
import NoteContent from './NoteContent'
import NoteButton from './NoteButton'

export default function NoteItem({ data, handleDelete, handleArchive }) {
    const item = data.map((data) => {
        return (
            <div className="note-item" key={data.id}>
                <NoteContent {...data} />
                <NoteButton handleDelete={handleDelete} handleArchive={handleArchive}
                    archived={data.archived} id={data.id} />
            </div>
        );
    });
    return (
        <>
            {data.length !== 0 ? item : <h4>Tidak ada catatan</h4>}
        </>
    );
}