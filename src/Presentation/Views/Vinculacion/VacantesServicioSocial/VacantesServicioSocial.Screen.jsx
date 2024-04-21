import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";

//Capa de datos
import { socialService } from "@Data/Vinculacion/servicioSocial";
//Capa de presentación
import PlusCard from "@Components/Card/PlusCard";
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function VacantesServicioScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Vacantes Servicio")}</title>
      </Helmet>

      <TecBanner text="Vacantes de Servicio Social" />
      <Row className="justify-content-center align-items-center row-gap-4 my-4">
        {socialService.map((vacancy, index) => (
          <PlusCard
            key={index}
            title={vacancy.title}
            content={vacancy.content}
          />
        ))}
      </Row>
    </div>
  );
}
