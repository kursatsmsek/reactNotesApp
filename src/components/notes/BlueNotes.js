import React from 'react';
import { useSelector } from 'react-redux';

function BlueNotes({ filtered, filteredItems }) {
    const items = useSelector((state) => state.notes.items);
    return (
        <div className="blue-notes">
            {
                filtered === true ?
                filteredItems.map((note) => {
                    if (note.color === "blue") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                }) :
                items.map((note) => {
                    if (note.color === "blue") {
                        return <div> <div className="note-box" key={note.id}>{note.content}</div> <hr className="hr" /> </div>
                    }
                })
            }
        </div>
    )
}

export default BlueNotes;