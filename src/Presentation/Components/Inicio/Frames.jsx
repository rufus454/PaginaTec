import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../General/Title";

import { frames } from "@Data/Inicio/frames";

const Frames = () => {
  return (
    <Row className="d-flex justify-content-center mb-5">
      <Title text="Síguenos" />
      {
        Object.entries(frames).map(([key, value], index) => (
          <Col key={index} lg={4} md={6} sm={12} xs={12} className="d-flex justify-content-center mb-3">
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </Col>
        ))
      }
    </Row>
  );
};

export default Frames;
