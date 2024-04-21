import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";

//Capa de datos
import { jobs } from "@Data/Vinculacion/ofertasTrabajo";
//Capa de presentación
import PlusCard from "@Components/Card/PlusCard";
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function OfertasTrabajoScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Ofertas de Trabajo")}</title>
      </Helmet>

      <TecBanner text="Bolsa de trabajo Egresados" />

      <Row className="justify-content-center align-items-center row-gap-4 my-4">
        {jobs.map((job, index) => (
          <PlusCard key={index} title={job.title} description={job.description} content={job.content} />
        ))}
      </Row>
    </div>
  );
}
