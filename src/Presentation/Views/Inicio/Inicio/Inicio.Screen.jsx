import React from "react";
import { Helmet } from "react-helmet";

import CarouselBanner from "@Components/Inicio/CarouselBanner";
import FloatingIcons from "@Src/Presentation/Components/Inicio/FloatingIcons";
import { News } from "@Components/Inicio/News";
import Frames from "@Components/Inicio/Frames";
import Sites from "@Components/Inicio/Sites";
import Map from "@Components/Inicio/Map";

/**
 * Pantalla de Inicio.
 * @returns {JSX.Element}
 */
export default function InicioScreen() {
  return (
    <div>
      <Helmet>
        <title>Tecnológico Nacional de México Campus Delicias</title>
      </Helmet>
      <CarouselBanner />
      <FloatingIcons />
      <News />
      <Frames />
      <Sites />
      <Map />
    </div>
  );
}
