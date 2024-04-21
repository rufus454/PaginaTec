import React from "react";
import { Helmet } from "react-helmet";

import { becasEstudiantes } from "@Data/Estudiantes/becas";
//Capa de presentación
import BecaCard from "@Components/Card/BecaCard";
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function BecasEstudiantesScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Becas Estudiantes")}</title>
      </Helmet>
      <TecBanner text="Becas para Estudiantes" />
      <div className="row my-5 d-flex justify-content-center">
        {becasEstudiantes.map((item, index) => (
          <BecaCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
