import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaInfoCircle } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import styles from "./Tutorias.module.css";
import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

import tutoriasData from "@Data/Personal/tutorias.json";

/**
 * @type {import('@Entity/Personal/Tutoria.Entity').Tutoria[]}
 */
const tutorias = tutoriasData.data;

export default function TutoriasScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Tutorías")}</title>
      </Helmet>
      <TecBanner text="Tutorías" />
      <Container fluid>
        <Row className="d-flex justify-content-center my-3">
          <Col md={2} className="d-flex justify-content-evenly mb-2 row-gap-2">
            <a
              id="SITIT"
              href="http://sitit.delicias.tecnm.mx/"
              className="btn bg-tec text-white"
            >
              SITIT{"  "} <FaInfoCircle color="#ffffff" />
            </a>
          </Col>
          <Col md={2} className="d-flex justify-content-evenly mb-2">
            <a
              className="btn bg-tec text-white"
              href="/doc/Personal/Tutorias/Actividad Tutorial Agosto Diciembre 2019 (1).zip"
              download="ActividadTutorialAgostoDiciembre"
            >
              Formato para reporte Final
              {"  "}
              <FaInfoCircle color="#ffffff" />
            </a>
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm={6} lg={6}>
            <Accordion className="px-5 (max-width: 768px) px-0">
              {tutorias.map((item, index) => {
                return (
                  <Accordion.Item
                    key={`${item.title}-${index}`}
                    eventKey={index}
                    className="mb-4"
                  >
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body className="d-flex flex-row w-100 h-100 flex-wrap">
                      {item.elements.map((element, index) => {
                        return (
                          <a
                            className="w-50 decoration-none text-black"
                            href={element.href}
                          >
                            <FaInfoCircle /> {"  "}
                            {element.title}
                          </a>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
              <Accordion.Item eventKey={tutorias.length} className="mb-4">
                <Accordion.Header>
                  Encuestas, Lineamiento, Manuales y Formatos
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h5>
                        <strong>Encuestas 1er Semestre</strong>
                      </h5>
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfilQaPG1rQzCQj3FDYry0ZdJtk9mp55vk9apbsqi39C3zarw/viewform?c=0&w=1"
                      >
                        <FaInfoCircle /> {"  "}Encuesta de Evaluacion de Tutores
                        y Tutoría
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScPr79liAn0mLImhzXCfycYUpTHtzkBhJAPLYdQBrIMnni-vg/viewform?c=0&w=1"
                      >
                        <FaInfoCircle /> {"  "}Encuesta Datos Sociodemográficos
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdFmtCw2Qz6p9qJ2GUqMxTlW199-jCvxOvw8tmXWpfE91Dipw/viewform"
                      >
                        <FaInfoCircle /> {"  "}Encuesta sobre discapacidades
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://goo.gl/forms/UnRe8sEMnRbT3UZZ2"
                      >
                        <FaInfoCircle /> {"  "}1er Encuesta de Seguimiento Académico para Alumnos
                        de 1er Semestre
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeyu8lhCHEANnPwH6_LAssNpyokOgJ3VgixJfvFdSc7qsrhOA/viewform?c=0&w=1"
                      >
                        <FaInfoCircle /> {"  "}Encuesta de Habilidades de Estudio y Organización
                        del Tiempo
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSefu2HQ7YpP7XXnOg4xcT5-7TdfYCqE2n-qRXhT0FSo-ToiyQ/closedform"
                      >
                        <FaInfoCircle /> {"  "}2da Encuesta de Seguimiento Académico Alumnos
                        Primer Semestre
                      </a>
                      <br />
                      <br />
                    </div>
                    <div className="col-12 col-md-6">
                      <h5>
                        <strong>Encuestas para 2do Semestre</strong>
                      </h5>
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-DYBnA2cS8_Hl4CQBII1Cp4klTSiABqUH_lY9c2Cb3n118A/closedform"
                      >
                        <FaInfoCircle /> {"  "}Encuesta de Evaluación a Conferencias
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfy_U_SA7z27chSYqJK5ypR9QFTOAWU02xLqiaJo7D_Rp5lGw/viewform"
                      >
                        <FaInfoCircle /> {"  "}1er Encuesta de Seguimiento Académico para Segundo
                        Semestre
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeL4SBJ5J6uQByhEEpkYFChtQvMV_8xispfGHhFRi40h_vqRw/viewform"
                      >
                        <FaInfoCircle /> {"  "}2da Encuesta de Seguimiento Académico para 2do
                        Semestre
                      </a>
                      <br />
                    </div>
                    <br />
                    <div className="col-12 col-md-6">
                      <h5>
                        <strong>Manuales y Formatos</strong>{" "}
                      </h5>
                      <a
                        className="decoration-none text-black text-dark"
                        href="http://tutorias.delicias.tecnm.mx/Tutoria2018.pdf"
                      >
                        <FaInfoCircle /> {"  "}Lineamientos Tutoriales 2018 solo para Tec
                        Delicias
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="http://tutorias.delicias.tecnm.mx/Manual_de_Lineamientos_TecNM_2015.pdf"
                      >
                        <FaInfoCircle /> {"  "}Lineamientos de Operación
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="http://tutorias.delicias.tecnm.mx/TutoriaIndividual2016.pdf"
                      >
                        <FaInfoCircle /> {"  "}Formato para Tutoria Individual
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="http://tutorias.delicias.tecnm.mx/CuadernoTrabajoTutoriaEstudianteDelSNIT.pdf"
                      >
                        <FaInfoCircle /> {"  "}Manual del Tutorado
                      </a>
                      <br />
                      <a
                        className="decoration-none text-black text-dark"
                        href="http://tutorias.delicias.tecnm.mx/ManualDelTutorDD.pdf"
                      >
                        <FaInfoCircle /> {"  "}Manual del Tutor
                      </a>
                      <br />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            sm={6}
            lg={6}
            className="d-flex justify-content-center position-relative"
          >
            <Image
              src="/image/personal/tutorias/tutor.jpg"
              fluid
              className={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
