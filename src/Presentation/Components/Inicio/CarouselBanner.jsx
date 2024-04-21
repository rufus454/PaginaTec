import { useState } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import bannersData from "@Data/Inicio/banners.json";

/**
 * @type {string[]}
 */
const banners = bannersData.banners;

const CarouselBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {banners.map((banner, index) => (
          <Carousel.Item key={`banner-${index}`}>
            <Image
              className="d-block w-100"
              src={banner}
              alt={`Banner ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselBanner;
