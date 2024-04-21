import React from "react";
import styled from "styled-components";

const DocLink = styled.a`
  color: #000;
  text-decoration: none;
  text-align: center;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    color: var(--secondary-color);
    transition: all 0.3s;
  }
`;

export default DocLink;
