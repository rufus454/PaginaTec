import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Title from "../General/Title";
import newsData from "@Data/Inicio/noticias.json";

/**
 * @type {import('@Entity/Inicio/NoticiaInicio.Entity').NoticiaInicio[]}
 */
const notas = newsData.notas;

const LinkNew = styled(Link)`
  color: var(--secondary-color);
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
    transition: all 0.3s ease;
  }
`;

export const News = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 992) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row className="bg-secondary-light d-flex justify-content-center mt-5 mb-2">
      <Title text="Noticias" />
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        autoplay
        className="px-5 py-3"
      >
        {notas.map((nota) => (
          <SwiperSlide key={nota.id}>
            <Card>
              <Card.Img
                variant="top"
                src={nota.image}
                style={{
                  height: "18rem",
                  maxHeight: "18rem",
                }}
              />
              <Card.Body>
                <Card.Title className="truncate-one fw-medium text-capitalize">
                  {nota.title}
                </Card.Title>
                <Card.Text className="w-100">
                  <span className="truncate-two fw-lighter">
                    {nota.description}
                  </span>
                  <LinkNew to={nota.href}>Leer más</LinkNew>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};
