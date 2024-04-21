import React from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";

const ReticleImage = styled(ModalImage)`
  width: 350px;
  height: 250px;
  align-self: center;

  @media (max-width: 768px) {
    width: 200px;
    height: 150px;
  }
`;

const ReticleElement = ({ image, alt, pdf }) => {
  return (
    <>
      <div className="d-flex w-100 justify-content-center mt-5">
        <ReticleImage small={image} large={image} alt={alt} />
      </div>
      <a className="text-center mt-2" href={pdf} target="_blank">
        Descargar retícula
      </a>
    </>
  );
};

export default ReticleElement;
