import React from 'react'
import Button from './common/Button'

export default function NoteButton({ id, archived, handleDelete, handleArchive }) {
    return (
        <div className="note-item__action">
            <Button className="note-item__delete-button" type="Delete" id={id} handleDelete={handleDelete} />
            {archived ? (
                <Button className="note-item__archive-button" type="Pindahkan" id={id} handleArchive={handleArchive} />
            ) : (
                <Button className="note-item__archive-button" type="Arsipkan" id={id} handleArchive={handleArchive} />
            )}
        </div>
    )
}
