import React from "react";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import careersData from "@Data/Aspirantes/carreras.json";

import { generateTitle } from "@Utility/Layout.Helper";

const careers = careersData.careers;

export default function CarrerasScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Carreras")}</title>
      </Helmet>
      <div className="row my-5 d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <h2 className="text-center w-100 text-dark">
            <b>Oferta Educativa</b>
          </h2>{" "}
          <br /> <br />
          <div className="row flex justify-content-center">
            <Image
              fluid
              src="/image/institucion/logotipos/itDelicias.png"
              alt="Logotipo del Tecnológico de Delicias"
              className="w-25"
              style={{ objectFit: "contain", height: "300px" }}
            />
          </div>
          <h5 className="text-center w-100 mt-2">
            TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS DELICIAS
          </h5>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 bg-tec text-center rounded-3 align-items-center">
            <h5 className="text-center text-white p-2">Perfil de Ingreso</h5>
          </div>
          <h6 className="col-md-12 text-justify px-5 mt-3">
            Es recomendable que los aspirantes a cursar cualquiera de las
            carreras del Instituto Tecnológico de Delicias cuenten con habilidad
            matemática (aritmética, geometría y álgebra); además de poseer
            habilidades analíticas y creativas para la solución de problemas,
            trabajo en equipo y comprensión de textos.
          </h6>
        </div>
        <div className="row justify-content-center">
          {careers.map((career, index) => (
            <Link
              className="bg-tec col-sm-11 col-md-4 col-lg-2 d-flex justify-content-center align-items-center m-2 p-4 text-center decoration-none flex-column rounded-3"
              to={career.enlace}
            >
              <picture>
                <img src={career.img} alt={career.carrera} />
              </picture>
              <div className="nombre-carrera">
                <p className="m-auto text-white">Ingeniería {career.carrera}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
