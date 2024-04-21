import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaInfoCircle } from "react-icons/fa";

const Card = styled.div`
  width: 360px;
  height: 400px;
  padding: 24px;
  background: #fff;
  position: relative;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-transition: 0.6s ease-out;
  transition: 0.6s ease-out;
  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  margin: 0 20px 0 0;

  &:hover {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover div {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  &:before {
    width: 100%;
    height: 100%;
    top: 0;
    right: "";
    bottom: "";
    left: 0;
    content: "";
    position: absolute;
    display: block;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#000),
      to(transparent)
    );
    background: linear-gradient(to top, #000, transparent);
    z-index: 2;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  & img {
    width: 100%;
    height: 100%;
    top: 0;
    right: "";
    bottom: "";
    left: 0;
    position: absolute;
    object-fit: cover;
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 3;
  color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  h2 {
    margin: 0;
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const TramiteCard = ({ tramite }) => {
  const { src, alt, title, href } = tramite;
  const validation = href.includes("/doc") ? true : false;
  return (
    <Card>
      <Image src={src} alt={alt} />
      <CardText>
        <h2 className="mb-3">{title}</h2>
        {validation ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <span>Para más información</span>
            <FaInfoCircle color="#ffffff" />
          </a>
        ) : (
          <Link to={href}>
            <span>Para más información</span>
            <FaInfoCircle color="#ffffff" />
          </Link>
        )}
      </CardText>
    </Card>
  );
};

export default TramiteCard;
