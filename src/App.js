import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import NoteSections from './components/NoteSections';
import AddNote from './components/middle/AddNote';
import Add from './components/middle/Add';
import { ChakraProvider } from '@chakra-ui/react';
import "./App.css";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <br />
        <SearchInput />
        <br />
        <Add />
        <br />
        <NoteSections />
      </ChakraProvider>
    </div>
  );
}

export default App;
