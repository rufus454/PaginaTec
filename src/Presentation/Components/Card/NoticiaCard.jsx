import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0;
`;

const ImageWrapper = styled(Image)`
  width: 175px;
  min-width: 175px;
  max-width: 175px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 0 0 10px;
`;

const Container = styled.div`
  padding: 10px;
  margin: auto 0;
  width: 100%;
`;

const LinkNew = styled(Link)`
  color: var(--secondary-color);
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
    transition: all 0.3s ease;
  }
`;

/**
 * Componente para renderizar una noticia
 * @param {Object} params Parámetros del componente
 * @param {String} params.title Título de la noticia
 * @param {String} params.description Descripción de la noticia
 * @param {String} params.image Imagen de la noticia
 * @param {String} params.href Enlace de la noticia
 */
const NoticiaCard = ({ title, description, image, href }) => {
  return (
    <Wrapper>
      <ImageWrapper src={image} fluid />
      <Container>
        <h6>{title}</h6>
        <span className="truncate-one-wb w-100">{description}</span>
        <LinkNew to={href}>Leer más</LinkNew>
      </Container>
    </Wrapper>
  );
};

export default NoticiaCard;
