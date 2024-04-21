import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ImageContainer = styled(Image)`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: contain;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    padding: 0 1rem;
  }
`;

const TextContainer = styled.div`
  padding-right: 10rem;

  @media (max-width: 768px) {
    padding-right: 0;
    padding: 1rem;
  }
`;

/**
 * Componente que muestra una sección con una imagen y un texto
 * @param {Object} params Parámetros del componente
 * @param {String} params.src Ruta de la imagen
 * @param {String} params.title Título de la sección
 * @param {String} params.text Texto de la sección 
 */
const SectionImage = ({ src, title, text }) => {
  return (
    <Row className="mt-4 w-100 m-0">
      <Col
        lg={6}
        md={12}
        sm={12}
        xs={12}
        className={`d-flex justify-content-center align-items-center`}
      >
        <ImageContainer src={src} alt={title} />
      </Col>
      <Col
        lg={6}
        md={12}
        sm={12}
        xs={12}
        className="d-flex justify-content-center align-items-center"
      >
        <TextContainer>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </TextContainer>
      </Col>
    </Row>
  );
};

export default SectionImage;
