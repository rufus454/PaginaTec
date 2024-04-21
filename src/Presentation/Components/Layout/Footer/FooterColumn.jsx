import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";

const FooterColumn = styled(Col)`
  @media (max-width: 768px) {
    & {
      margin: 1rem auto;
    }
  }
`;

export default FooterColumn;
