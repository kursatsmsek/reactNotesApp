import React, { useState } from 'react';
import { Box, ButtonGroup, Button, Textarea } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/NoteSlice';
import { nanoid } from '@reduxjs/toolkit';

function Add() {
    const dispatch = useDispatch();
    const [currentColor, setColor] = useState('blue');
    const [currentText, setText] = useState('');

    const onClick = () => {
        dispatch(addNote({
            id: nanoid(),
            color: currentColor,
            content: currentText,
        }));
        setText('');
    }
    return (
        <div className="AddSection">
            <div className="TextAreaDiv">
                <Textarea value={currentText} onChange={(e) => setText(e.target.value)} placeholder="Write your notes ..." width="80%" height="150px" />
            </div>
            <br />
            <div className="AddFooterArea">
                <div className="AddFooter">
                    <div className="Colors">
                        <Box as="button" onClick={() => setColor('blue')} borderRadius="100" bg="cyan" px={currentColor === "blue" ? 2 : 4} h={8} > {currentColor === "blue" ? "✔️" : null} </Box>
                        <Box as="button" onClick={() => setColor('green')} borderRadius="100" bg="lime" px={currentColor === "green" ? 2 : 4} h={8} > {currentColor === "green" ? "✔️" : null} </Box>
                        <Box as="button" onClick={() => setColor("red")} borderRadius="100" bg="tomato" px={currentColor === "red" ? 2 : 4} h={8} > {currentColor === "red" ? "✔️" : null} </Box>
                    </div>
                    <div className="AddButton">
                        <ButtonGroup variant="outline" spacing="6">
                            <Button onClick={onClick} colorScheme="blue">Add</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;