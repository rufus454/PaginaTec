import React from "react";
import { Helmet } from "react-helmet";
import { FaCircleArrowDown } from "react-icons/fa6";

//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function TrasladosScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Traslados")}</title>
      </Helmet>

      <div className="row mb-5">
        <img
          className="w-100 h-100"
          src="/image/estudiantes/trasladosBanner.png"
        />
      </div>
      <div className="row flex justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">
            <b>Traslados</b>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            El traslado estudiantil es el acto legal que reconoce que un
            estudiante en un Instituto cambia de adscripción a otro Instituto
            adscrito al TecNM, conservando los derechos y obligaciones que le
            proporciona ser estudiante de los Institutos.
          </p>
        </div>
      </div>

      <div className="row flex justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">
            <b>Duración</b>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            Se puede realizar un número indeterminado de traslados entre las
            Instituciones adscritas al TecNM, inclusive si regresa a un
            Instituto en el que haya estado adscrito previamente, siempre y
            cuando el estudiante logre terminar su carrera dentro del periodo
            reglamentario de 12 semestres. <br />
            Cuando el estudiante solicite su traslado a un plan de estudios
            diferente, se otorga por una única ocasión de acuerdo con
            lineamiento vigente referente a la convalidación de estudios.
          </p>
        </div>
      </div>

      <div className="row flex justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">
            <b>Requisitos</b>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            El estudiante deberá presentar ante el Coordinador de Carrera
            (División de Estudios Profesionales) del Tecnológico de origen,
            previo al periodo de reinscripción del Instituto receptor, lo
            siguiente: <br />
            ● Solicitud de traslado.
            <br />
            ● Hoja de no adeudo debidamente requisitada solicitarla en servicios
            escolares.
            <br />
          </p>
        </div>
      </div>

      <div className="row d-flex flex-wrap justify-content-center py-5">
        <div className="w-100 text-center">
          Descarga tu solicitud de traslado aquí
        </div>
        <div className="w-100 text-center">
          <a
            href="/doc/Estudiantes/Tramites/Solicitud_traslado2.pdf"
            download="Solicitud_Traslado"
          >
            <FaCircleArrowDown className="bi bi-cloud-arrow-down-fill icono text-dark" />
          </a>
        </div>
      </div>
    </div>
  );
}
