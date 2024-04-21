import React from "react";

/**
 * Componente que muestra un enlace a una red social en el footer
 * @param {Object} params Parámetros del componente
 * @param {String} params.href URL del enlace
 * @param {String} params.title Título del enlace
 * @param {import('react-icons').IconType} params.Icon Icono del enlace 
 */
const FooterMedia = ({ href, title, Icon }) => {
  return (
    <a
      href={href}
      className="text-white text-decoration-none"
      title={title}
      target="_blank"
    >
      <Icon className="footer-media" />
    </a>
  );
};

export default FooterMedia;
