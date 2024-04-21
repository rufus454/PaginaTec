import React from "react";
import { Helmet } from "react-helmet";
import { FaCircleArrowDown } from "react-icons/fa6";

//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function MovilidadEstudiantilScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Movilidad Estudiantil")}</title>
      </Helmet>

      <div className="row mb-5">
        <img
          className="w-100 h-100"
          src="/image/estudiantes/movilidadBanner.png"
        />
      </div>

      <div className="row flex justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">
            <b>Movilidad Estudiantil</b>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            La movilidad estudiantil facilita a los estudiantes fortalecer el
            desarrollo de competencias profesionales en una Institución de
            Educación Superior (IES) diferente a la de origen, para apoyar su
            formación integral. También permite a las IES la colaboración y el
            trabajo conjunto a través de la vinculación, otorgando al estudiante
            flexibilidad en la continuación de sus estudios. Este proceso
            permite al estudiante cursar asignaturas y realizar actividades
            académicas correspondientes a su plan de estudios en las
            Instituciones adscritas al TecNM, o en las Instituciones de
            Educación Superior nacionales o extranjeras, diferentes a su
            Instituto de adscripción, con base en los convenios de colaboración
            establecidos entre las Instituciones involucradas.
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
            El estudiante puede cursar un máximo de tres semestres en movilidad,
            sean consecutivos o alternos.
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
            División de Estudios Profesionales verifica que el estudiante que
            solicita movilidad cumpla con lo siguiente: <br />
            ● Que las asignaturas que sean solicitadas tengan cubiertos los
            requisitos establecidos en la convocatoria.
            <br />
            ● No tener más de una asignatura en curso de repetición, a excepción
            de aquellos estudiantes que participan en cursos de verano.
            <br />
            ● Haber cursado al menos el 50% de créditos de su plan de estudios a
            excepción de aquellos estudiantes que participan en cursos de
            verano.
            <br />
            ● No tener adeudos (material de laboratorios, libros, etc.) con la
            institución.
            <br />
            ● Que el período de movilidad del estudiante no exceda el período de
            tres semestres alternados o consecutivos.
            <br />
          </p>
        </div>
      </div>

      <div className="row d-flex flex-wrap justify-content-center py-5">
        <div className="w-100 text-center">
          Descarga tu solicitud de movilidad aquí
        </div>
        <div className="w-100 text-center">
          <a
            href="/doc/Estudiantes/Tramites/Solicitud_movilidad.pdf"
            download="Solicitud_Movilidad"
          >
            <FaCircleArrowDown className="bi bi-cloud-arrow-down-fill icono text-dark" />
          </a>
        </div>
      </div>
    </div>
  );
}
