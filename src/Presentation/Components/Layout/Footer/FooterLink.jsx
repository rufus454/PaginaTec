import React from "react";
import styled from "styled-components";

const FooterLinkWrapper = styled.a`
  color: #ffffff;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: var(--amber);
    transition: all 0.3s ease;
  }
`;

/**
 * Componente que muestra un enlace en el footer
 * @param {Object} params Parámetros del componente
 * @param {String} params.href URL del enlace
 * @param {String} params.text Texto del enlace
 */
const FooterLink = ({ href, text }) => {
  return (
    <FooterLinkWrapper href={href} title={text}>
      {text}
    </FooterLinkWrapper>
  );
};

export default FooterLink;
