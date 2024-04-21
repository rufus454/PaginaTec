import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//UI
import styles from "./Logotipos.module.css";
//Capa de datos
import logosData from "@Data/Institucion/logotipos.json";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

/**
 * @type {import('@Entity/Institucion/Logotipos.Entity').Logotipos[]}
 */
const logos = logosData.logos;

export default function LogotiposScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Logotipos")}</title>
      </Helmet>
      <TecBanner text="Logotipos" />
      <Row className="row-gap-5 mb-5 w-100 m-0">
        {logos.map((logo, index) => (
          <Col
            key={`${logo.name}-${index}`}
            xs={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <img src={logo.src} alt={logo.name} className={styles.image} />
            <a href={logo.image} class="btn btn-tec" download={logo.name}>
              Descargar
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
