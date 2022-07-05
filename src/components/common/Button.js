import React from 'react'

export default function Button({ type, id, handleDelete, handleArchive, className }) {
    return (
        <button className={className} onClick={() => type === "Delete" ? handleDelete(id) : handleArchive(id)}>
            {type}
        </button>
    )
}
