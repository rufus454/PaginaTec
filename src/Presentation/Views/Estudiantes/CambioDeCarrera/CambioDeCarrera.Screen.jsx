import React from "react";
import { Helmet } from "react-helmet";
import { FaCircleArrowDown } from "react-icons/fa6";

//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function CambioDeCarreraScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Cambio de Carrera")}</title>
      </Helmet>

      <div className="row mb-5">
        <img
          className="w-100 h-100"
          src="/image/estudiantes/cambioCarreraBanner.png"
        />
      </div>
      <div className="row flex justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">
            <b>Cambio Carrera</b>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            Permite al estudiante reorientar en forma vocacional sus estudios a
            un perfil profesional afín a sus habilidades y aptitudes,
            conservando su número de control. Al estudiante en convalidación se
            le recalcula el semestre al que se inscribe de acuerdo con las
            asignaturas convalidadas y para facilitar el seguimiento de los
            estudiantes en esta situación, se le antepone la letra “C” al número
            de control.
          </p>
        </div>
      </div>
      <div className="row d-flex flex-wrap justify-content-center py-5">
        <div className="w-100 text-center">
          Descarga tu solicitud de cambio de carrera aquí
        </div>
        <div className="w-100 text-center">
          <a
            href="/doc/Estudiantes/Tramites/Solicitud_cambio.pdf"
            download="Solicitud_CambioCarrera"
          >
            <FaCircleArrowDown className="bi bi-cloud-arrow-down-fill icono text-dark" />
          </a>
        </div>
      </div>
    </div>
  );
}
