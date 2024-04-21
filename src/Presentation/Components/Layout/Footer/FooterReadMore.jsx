import React from "react";
import styled from "styled-components";

const FooterReadMore = styled.a`
  color: var(--amber);
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    transition: all 0.3s ease;
  }
`;

export default FooterReadMore;