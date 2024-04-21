import React from "react";
import { Helmet } from "react-helmet";

//Capa de datos
import data from "@Data/Institucion/mision.json";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
import SectionImage from "@Components/Institucion/SectionImage";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

/**
 * @type {import('@Entity/Institucion/Mision.Entity').MVV[]}
 */
const elements = data.elements;

export default function MisionScreen() {
  return (
    <div className="mb-4 w-100">
      <Helmet>
        <title>{generateTitle("Misión, Visión y Valores")}</title>
      </Helmet>
      <TecBanner text="Misión, Visión y Valores" />
      {elements.map((element, index) => (
        <SectionImage
          key={index}
          src={element.src}
          title={element.title}
          text={element.text}
        />
      ))}
    </div>
  );
}
