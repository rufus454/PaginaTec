import React from "react";

/**
 * Componente para renderizar un título
 * @param {Object} params Parámetros del componente
 * @param {String} params.text Texto del título
 * @param {Boolean} params.isPage Indica si el título es de una página
 */
const Title = ({ text, isPage = false }) => {
  return (
    <h3
      className={`text-center font-weight-bold text-uppercase 
      ${!isPage && "pt-4 pb-2"}`}>
      {text}
    </h3>
  );
};

export default Title;
