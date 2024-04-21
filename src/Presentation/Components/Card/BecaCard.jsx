import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const CardContainer = styled(Card)`
  width: 18rem;
  height: 100%;
  height: 28rem;
  min-height: 28rem;
  max-height: 28rem;
  margin: 10px;

  @media screen and (max-width: 768px) {
    & {
      width: 70% !important;
      height: 30rem;
      min-height: 30rem;
      max-height: 30rem;
    }
  }
`;

const Title = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
`;

/**
 * Carta de organigrama
 * @param {Object} params Parámetros del componente
 * @param {Object} params.item
 */
const BecaCard = ({ item }) => {
  return (
    <CardContainer>
      <Card.Title className="text-center mt-2">{item.title}</Card.Title>
      <Card.Body className="d-flex flex-column justify-content-between">
        {item.desc}
        <div className="d-flex justify-content-between flex-column row-gap-2">
          <a
            className="btn btn-tec mx-auto"
            download={item.docdesc}
            href={item.doc}
          >
           Convocatoria
          </a>
          <a
            className="btn btn-tec mx-auto"
            download={item.pdfdesc}
            href={item.pdf}
          >
            Solicitud
          </a>
        </div>
      </Card.Body>
    </CardContainer>
  );
};

export default BecaCard;
