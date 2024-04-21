import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";

//Capa de datos
import { vacancy } from "@Data/Vinculacion/residencias";
import PlusCard from "@Components/Card/PlusCard";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function VacantesResidenciaScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Vacantes Residencia")}</title>
      </Helmet>

      <TecBanner text="Vacantes de Residencia Profesional" />
      <Row className="justify-content-center align-items-center row-gap-4 my-4">
        {vacancy.map((vacancy, index) => (
          <PlusCard
            key={index}
            image={vacancy.image}
            title={vacancy.title}
            description={vacancy.description}
            content={vacancy.content}
          />
        ))}
      </Row>
    </div>
  );
}
