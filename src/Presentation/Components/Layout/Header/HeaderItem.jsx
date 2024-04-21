import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

/**
 * Componente que muestra un item del header
 * @param {Object} params Parámetros del componente
 * @param {String} params.src Ruta de la imagen
 * @param {String} params.alt Texto alternativo de la imagen
 */
const HeaderItem = ({ src, alt }) => {
  return (
    <Col
      lg={3}
      md={6}
      sm={6}
      xs={6}
      className="d-flex justify-content-center align-items-center"
    >
      <Image fluid src={src} alt={alt} />
    </Col>
  );
};

export default HeaderItem;
