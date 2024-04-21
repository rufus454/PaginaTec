import React from "react";
import styled from "styled-components";
import FooterColumn from "./FooterColumn";

const FooterLogoWrapper = styled(FooterColumn)`
  @media (max-width: 768px) {
    & {
      align-items: center;
    }
  }
`;

export default FooterLogoWrapper;
