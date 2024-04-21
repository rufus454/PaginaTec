import React from "react";
import styled from "styled-components";

const SubjectContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default SubjectContainer;
