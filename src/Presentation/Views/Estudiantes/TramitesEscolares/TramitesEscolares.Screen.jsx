import React from "react";
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container';

import tramitesData from "@Data/Estudiantes/tramites.json";
import TramiteCard from "@Components/Card/TramiteCard";
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

const tramites = tramitesData.tramites;

export default function TramitesEscolaresScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Trámites Escolares")}</title>
      </Helmet>

      <TecBanner text="Trámites Escolares" />

      <Container className="d-flex justify-content-center my-5">
        {tramites.map((tramite, index) => (
          <TramiteCard key={index} tramite={tramite} />
        ))}
      </Container>
    </div>
  );
}
