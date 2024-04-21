import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";

const HorizontalSpacer = styled(Row)`
  width: 100%;
  padding: 0 20rem;

  @media (max-width: 1200px) {
    padding: 0 10rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default HorizontalSpacer;
