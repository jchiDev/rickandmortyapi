import React from "react";
import Header from './components/Header'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container className="App">
      <Header />
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default App;