import React from "react";
import styled from "styled-components";

const NavigationTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  margin-left: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;

  &::after {
    content: "ITD";
    content: "Instituto Tecnológico de Delicias";
  }

  &:hover {
    color: var(--secondary-color);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    & {
      font-size: 1rem;
    }

    &::after {
      content: "Tecnológico de Delicias";
    }
  }

  @media screen and (max-width: 480px) {
    &::after {
      content: "IT Delicias";
    }
  }
`;

export default NavigationTitle;
