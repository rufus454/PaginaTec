import React from "react";
import styled from "styled-components";

const SiteLinkWrapper = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s;
  margin-bottom: 1rem;

  &:hover {
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.3s;
  }
`;

/**
 * Componente para enlaces a sitios internos
 * @param {Object} params Parámetros del componente
 * @param {string} params.href URL del sitio
 * @param {React.ReactNode} params.children Contenido del enlace
 */
const SiteLink = ({ href, children }) => {
  return (
    <SiteLinkWrapper target="_blank" href={href}>
      {children}
    </SiteLinkWrapper>
  );
};

export default SiteLink;
