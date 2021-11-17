import React from "react";
import {Container} from 'react-bootstrap'

// Componentes
import Header from './components/Header/Header'
import ItemLista from './components/Items';
import Item from './components/Item/Item';
import NotFound from './components/NotFound/NotFound';

import './App.scss'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
      <Container className="App">
        <Header />
        <Routes>
            <Route path="/" element={<ItemLista />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
  );
}

export default App;