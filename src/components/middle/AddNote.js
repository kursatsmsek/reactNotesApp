import React from 'react';
import { Textarea } from "@chakra-ui/react"

function AddNote() {
    return (
        <div className="AddNote">
            <Textarea placeholder="Write your notes ..." width="80%" height="150px" />
        </div>
    )
}

export default AddNote;
