import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ModalImage from "react-modal-image";

const CardContainer = styled(Card)`
  width: 18rem;
  height: 100%;
  height: 28rem;
  min-height: 28rem;
  max-height: 28rem;

  @media screen and (max-width: 768px) {
    & {
      width: 100% !important;
      height: 30rem;
      min-height: 30rem;
      max-height: 30rem;
    }
  }
`;

const Image = styled(ModalImage)`
  width: 100%;
  object-fit: cover;
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
 * @param {import('@Entity/Institucion/Organigrama.Entity').Organigrama} params.item
 */
const OrganigramaCard = ({ item }) => {
  return (
    <CardContainer>
      <Image small={item.src} large={item.src} alt={item.name} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Title>{item.name}</Title>
        {item.email && (
          <Card.Text>
            Correo: <a href={`mailto:${item.email}`}>{item.email}</a>
          </Card.Text>
        )}
        <div className="d-flex justify-content-center">
          <a className="btn btn-tec mx-auto"
            download={item.name}
            href={item.src}
          >Descargar</a>
        </div>
      </Card.Body>
    </CardContainer>
  );
};

export default OrganigramaCard;
