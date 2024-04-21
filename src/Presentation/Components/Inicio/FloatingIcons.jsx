import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import iconsData from "@Data/Inicio/icons.json";

/**
 * @type {import('@Entity/Inicio/Icono.Entity').Icono[]}
 */
const icons = iconsData.icons;

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  position: fixed;
  right: 0;
  z-index: 1100;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 10px;
`;

const Element = styled.li`
  list-style-type: none;
  background-color: transparent;
  height: 45px;
  padding: 0px;
  margin-bottom: 1px;
  transition: 0.2s all;
  cursor: pointer;
  font-size: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled(Image)`
  border-radius: 160px;
  border: 1px solid #666;
  width: 32px;
  height: 32px;
`;

const Button = ({ image, title, url }) => {
  return (
    <OverlayTrigger placement={"left"} overlay={<Tooltip>{title}</Tooltip>}>
      <Element>
        <a href={url} target="_blank">
          <Icon src={image} alt={title} />
        </a>
      </Element>
    </OverlayTrigger>
  );
};

const FloatingIcons = () => {
  return (
    <Container>
      <ul>
        {icons.map((icon, index) => (
          <Button
            key={index}
            image={icon.image}
            title={icon.title}
            url={icon.url}
          />
        ))}
      </ul>
    </Container>
  );
};

export default FloatingIcons;
