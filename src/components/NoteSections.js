import React from 'react';
import BlueNotes from './notes/BlueNotes';
import GreenNotes from './notes/GreenNotes';
import RedNotes from './notes/RedNotes';
import { useSelector } from 'react-redux';
function NoteSections() {
    const filtered = useSelector((state) => state.notes.filtered);
    const filteredItems = useSelector((state) => state.notes.filteredItems);
    return (
        <div className="Footer">
            <div className="NoteSections">
                <BlueNotes filtered={filtered} filteredItems={filteredItems}/>
                <GreenNotes filtered={filtered} filteredItems={filteredItems}/>
                <RedNotes filtered={filtered} filteredItems={filteredItems}/>
            </div>
        </div>
    )
}

export default NoteSections;
