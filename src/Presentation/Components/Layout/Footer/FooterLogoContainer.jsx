import React from "react";
import styled from "styled-components";

const FooterLogoContainer = styled.div`
  width: 250px;
  height: 150px;

  @media (max-width: 768px) {
    & {
      width: 200px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default FooterLogoContainer;
