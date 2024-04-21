import React from "react";
import { Helmet } from "react-helmet";
import Accordion from "react-bootstrap/Accordion";

import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

export default function ActividadesComplementariasScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Actividades Complementarias")}</title>
      </Helmet>

      <TecBanner text="Actividades Complementarias" />

      <div className="container my-5">
        <div className="row margen-view">
          <div className="col-12 col-md-6 margen-img">
            <img
              src="/image/estudiantes/soccer.jpg"
              className="img-fluid border-ra"
              alt="Alternate Text"
            />
          </div>
          <div className="col-12 col-md-6 ">
            <h4 className="margin-small">¿Qué son?</h4>
            <p className="text-justify">
              Son aquellas que realiza el estudiante en beneficio de su
              formación integral con el objetivo de fortalecer sus competencias
              profesionales. Las actividades complementarias pueden ser:
              <ul>
                <li>Tutorías.</li>
                <li>Actividades deportivas y culturales.</li>
                <li>Proyectos de investigación.</li>
                <li>Participación en eventos académicos.</li>
                <li>Productividad laboral.</li>
                <li>Emprendedurismo.</li>
                <li>Proyectos de investigación.</li>
                <li>Proyectos interdisciplinarios.</li>
                <li>Construcción de prototipos y desarrollo tecnológico.</li>
                <li>Conservación al medio ambiente.</li>
                <li>Aquellas que defina el comité académico.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row margen-view">
          <div className="col-12">
            <h4 className="col-12 col-md-6 text-center">
              Procedimiento para las Actividades
            </h4>
          </div>
          <div className="col-12 col-md-6 ">
            <Accordion
              className="mt-5 px-5
      (max-width: 768px) px-0"
            >
              <Accordion.Item eventKey={0} className="mb-4">
                <Accordion.Header> 1. Infórmate:</Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p>
                      Catálogo de las diversas Actividades Complementarias.
                      <br />
                      <i className="bi bi-info-circle-fill">
                        <a href="/doc/estudiantes/ActComplementarias/ActividadesComplementarias.pdf"
                          target="_blank"
                          rel="noreferrer"
                      
                        >
                          Más Información{" "}
                        </a>
                      </i>
                    </p>
                    <p className="text-justify">
                      <strong>IMPORTANTE:</strong> El valor curricular para el
                      conjunto de las actividades complementarias establecidas
                      en el plan de estudios es de cinco créditos, considerando
                      que por cada crédito equivale a veinte horas efectivas y
                      verificables, su cumplimiento debe ser dentro de los seis
                      primeros semestres.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey={1} className="mb-4">
                <Accordion.Header>
                  2. Solicita ingreso a una Actividad Complementaria:
                </Accordion.Header>
                <Accordion.Body>
                  El estudiante solicita la autorización y registro para cursar
                  alguna actividad complementaria a la División de Estudios
                  Profesionales.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey={2} className="mb-4">
                <Accordion.Header>
                  3. Termino de la Actividad Complementaria:
                </Accordion.Header>
                <Accordion.Body>
                  Al final de la actividad, el(la) Responsable de la Actividad
                  Complementaria deberá entregar una constancia.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey={3} className="mb-4">
                <Accordion.Header>
                  4. Entrega Constancia en Servicios Escolares:
                </Accordion.Header>
                <Accordion.Body>
                  <strong>a) </strong>Anexa la acreditación de la Actividad
                  Complementaria en el expediente del (de la) estudiante.
                  <br />
                  <strong>b) </strong> Una vez que se hayan liberado los{" "}
                  <strong>5 créditos</strong>
                  requeridos en la retícula para las actividades complementarias
                  se registra la liberación y calificación en el SII.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-12 col-md-6 margen-img">
            <img
              src="/image/estudiantes/musica.JPG"
              className="img-fluid border-ra margin-small"
              alt="Alternate Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
