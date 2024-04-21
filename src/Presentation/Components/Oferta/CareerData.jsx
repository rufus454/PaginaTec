import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CareerData = ({ image, title, text }) => {
  return (
    <Row className="d-flex justify-content-center my-5 w-100 mx-0">
      <Col
        md={4}
        className="d-flex flex-wrap justify-content-center align-content-center mb-4"
      >
        <Image src={image} fluid className="w-100 rounded" />
      </Col>
      <Col
        md={4}
        className="d-flex flex-wrap justify-content-center align-content-center bg-tec text-white mb-4"
      >
        <h2 className="my-3 pt-3 text-center">{title}</h2>
        <p className="px-5 pb-5 text-justify my-3">{text}</p>
      </Col>
    </Row>
  );
};

export default CareerData;
