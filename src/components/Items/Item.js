import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Animaciones
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations";
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;
import { fadeInDown} from "react-animations";
const FadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
  animation: 1s ${FadeInDownAnimation};
`;


const Item = (props) => {

    // Props
    const { results } = props;

    return(
        <>
            {results.map((item, index) => {
                return (
                    <Col key={index} lg={3} md={4} sm={6} xs={12}>
                        <Card className="mb-4">
                            <Link to={`/item/${item.id}`} key={item.id}>
                                <FadeInDiv><Card.Img className="px-2 py-2" variant="top" src={item.image} alt={item.name} /></FadeInDiv>
                            </Link>
                            <Card.Body className="text-center">
                                <FadeInDownDiv>
                                <Card.Title>
                                    {item.name}
                                </Card.Title>
                                </FadeInDownDiv>
                                <p className="card-text"><small className="text-muted">{item.location.name}</small></p>
                                {/* <Card.Text><strong>Estatus:</strong> {item.status}</Card.Text>
                                <Card.Text><strong>Especie:</strong> {item.species}</Card.Text>
                                <Card.Text><strong>Género:</strong> {item.gender}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </>
    );
};

export default Item