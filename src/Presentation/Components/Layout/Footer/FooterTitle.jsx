import React from "react";

/**
 * Componente que muestra el título del footer
 * @param {Object} params Parámetros del componente
 * @param {String} params.title Título del footer 
 */
const FooterTitle = ({ title }) => {
  return <h3 className="text-white mb-3 overflow-hidden">{title}</h3>;
};

export default FooterTitle;
