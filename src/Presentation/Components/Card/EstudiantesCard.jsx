import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  height: 300px;
  position: relative;
  background-color: var(--primary-color);
  -webkit-box-shadow: 0 21px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 21px 35px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  padding: 0 15px;
  border-radius: 20px;
  color: white;
  align-items: center;
`;

const EstudiantesCard = ({ title, description }) => {
  return (
    <Card className="col-lg-6 col-md-12 col-sm-12">
      <div className="h-100 d-flex flex-column justify-content-center">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default EstudiantesCard;
