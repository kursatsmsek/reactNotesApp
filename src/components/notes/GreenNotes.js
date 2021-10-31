import React from 'react';
import { useSelector } from 'react-redux';

function GreenNotes({ filtered, filteredItems }) {
    const items = useSelector((state) => state.notes.items);
    return (
        <div className="green-notes">
            {
                filtered === true ?
                filteredItems.map((note) => {
                    if (note.color === "green") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                }) :
                items.map((note) => {
                    if (note.color === "green") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                })
            }
        </div>
    )
}

export default GreenNotes;