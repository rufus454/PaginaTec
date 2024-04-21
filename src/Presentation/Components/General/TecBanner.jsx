import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("/image/layout/banner/generic.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    & {
      height: 100px;
    }
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 5rem;
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
 * @param {String} params.text Texto del banner
 */
const TecBanner = ({ text }) => {
  return (
    <Container>
      <Overlay>
        <h2>{text}</h2>
      </Overlay>
    </Container>
  );
};

export default TecBanner;
