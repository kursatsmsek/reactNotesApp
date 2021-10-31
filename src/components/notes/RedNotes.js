import React from 'react';
import { useSelector } from 'react-redux';

function RedNotes({ filtered, filteredItems }) {
    const items = useSelector((state) => state.notes.items);
    return (
        <div className="red-notes">
            {
                filtered === true ?
                filteredItems.map((note) => {
                    if (note.color === "red") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                }) :
                items.map((note) => {
                    if (note.color === "red") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                })
            }
        </div>
    )
}

export default RedNotes;
