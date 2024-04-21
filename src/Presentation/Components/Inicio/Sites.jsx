import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Title from "../General/Title";
import sitiosInteresData from "@Data/Inicio/sitiosInteres.json";

/**
 * @type {import('@Entity/Inicio/SitioInteres.Entity').SitioInteres[]}
 */
const sites = sitiosInteresData.sites;

const SiteImage = styled(Image)`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Site = ({ img, href, alt }) => {
  return (
    <Col
      lg={2}
      md={4}
      sm={6}
      xs={6}
      className="d-flex justify-content-center align-items-center"
    >
      <a href={href} target="_blank" rel="noreferrer" title={alt.toUpperCase()}>
        <SiteImage src={img} alt={alt} fluid />
      </a>
    </Col>
  );
};

const Sites = () => {
  return (
    <Row className="bg-secondary-light d-flex justify-content-center row-gap-4 pb-5">
      <Title text="Sitios de Interés" />
      {sites.map((site, index) => (
        <Site
          key={`${site.name}-${index}`}
          img={site.image}
          href={site.url}
          alt={site.name}
        />
      ))}
    </Row>
  );
};

export default Sites;
