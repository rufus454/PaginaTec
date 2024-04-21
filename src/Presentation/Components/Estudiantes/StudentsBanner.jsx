import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  user-select: none;

  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 1rem;
    }
  }
`;

/**
 * Este componente se utiliza para los banners genéricos que se utilizan en distintas pantallas para indicar un título
 * @param {Object} params Parámetros del componente
 * @param {String} params.url URL de la imagen de fondo
 * @param {React.ReactNode} params.children Contenido del banner
 */
const StudentsBanner = ({ url, children }) => {
  return (
    <Container url={url}>
      <Overlay>{children}</Overlay>
    </Container>
  );
};

export default StudentsBanner;
