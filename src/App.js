import React from "react";
import {Container} from 'react-bootstrap'

// Componentes
import Header from './components/Header/Header'
import ItemLista from './components/Items';
import Item from './components/Item/Item';

import './App.scss'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Container className="App">
        <Header />
        <Routes>
            <Route path="/" element={<ItemLista />} />
            <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Container>
  );
}

export default App;