import React from 'react';
import {
    InputGroup,
    InputLeftElement,
    Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { filter } from '../redux/NoteSlice';
import { useDispatch } from 'react-redux';

function SearchInput() {
    const dispatch = useDispatch();

    return (
        <div className="SearchInput">
            <InputGroup className="SearchInputGroup" width="80%">
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input onChange={(e) => dispatch(filter(e.target.value))} type="text" placeholder="Search Note" />
            </InputGroup>
        </div>
    )
}

export default SearchInput;
