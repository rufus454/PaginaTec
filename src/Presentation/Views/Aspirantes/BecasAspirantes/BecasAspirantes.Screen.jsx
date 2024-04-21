import React from "react";
import { Helmet } from "react-helmet";

import { becasAspirantes } from "@Data/Aspirantes/becas";
//Capa de presentación
import BecaCard from "@Components/Card/BecaCard";
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function BecasAspirantesScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Becas Aspirantes")}</title>
      </Helmet>
      <TecBanner text="Becas para Aspirantes" />
      <div className="row my-5 d-flex justify-content-center">
        {becasAspirantes.map((item, index) => (
          <BecaCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
