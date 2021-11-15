import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

// Animaciones
import styled, { keyframes } from "styled-components";
import {bounce} from "react-animations";
const BounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
  animation: 3s ${BounceAnimation};
`;

import { bounceInRight} from "react-animations";
const BounceInRightAnimation = keyframes`${bounceInRight}`;
const BounceInRightDiv = styled.div`
  animation: 2s ${BounceInRightAnimation};
`;

// Iconos
import { FaArrowLeft } from "react-icons/fa";

// REDUX
import { useSelector , useDispatch} from 'react-redux';
import {
  selectedItem,
  removeSelectedItem,
} from '../../redux/actions/itemActions'

export default function Personaje() {

  const item = useSelector((state) => state.item);
  const {name, image, status, species, gender, origin, location, created } = item;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(item)

  const fetchItemDetail = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        dispatch(selectedItem(res.data));
        console.log("Response Item:", res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchItemDetail();
    return () => {
      dispatch(removeSelectedItem());
    }
  }, [id]);

  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <Button as={Link} to="/" variant="dark"><FaArrowLeft /> Regresar</Button>
        </Col>
      </Row>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 col-sm-12">
            <BounceInRightDiv><img src={image} className="img-fluid rounded-start" alt={name} /></BounceInRightDiv>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <BounceDiv>
                <h1 className="card-title">{name}</h1>
              </BounceDiv>
              <p className="card-text">{gender}</p>
              <p className="card-text">{species}</p>
              <p className="card-text">{status}</p>
              <p className="card-text"><small className="text-muted">{created}</small></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
