import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "./Mensaje.module.css";
import { generateTitle } from "@Utility/Layout.Helper";

/**
 * Pantalla de mensaje de la directora.
 * @returns {JSX.Element}
 */
export default function MensajeScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Mensaje de la Directora")}</title>
      </Helmet>
      <Row className={`${styles.container} d-flex justify-content-center my-5 px-5 mx-0`}>
        <Col
          lg={5}
          md={6}
          sm={12}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="/image/institucion/mensaje/directora.jpg"
            fluid
            className={styles.image}
          />
        </Col>
        <Col lg={7} md={6} sm={12} xs={12} className={styles.text}>
          <p>
            El Instituto Tecnológico de Delicias pone a tu consideración su
            oferta académica, como verás, podrás elegir la que mas sea de tu
            agrado. Tu decisión es muy importante, ya que de ello depende tu
            futuro en el campo laboral tan competido en nuestros días.
          </p>
          <p>
            Nuestra Institución ofrece respaldo de un Sistema Nacional de
            Educación Superior Tecnológica firmemente estructurado, planes y
            programas de estudio actualizados y orientados hacia un aprendizaje
            significativo contemplado con nuestro nuevo modelo educativo para el
            siglo XXI. Todo ello basado en un sistema de gestión de la calidad y
            la certificación de carreras que se imparten, lo que nos posicionará
            a estándares internacionales en educación superior.
          </p>
          <p className="fw-semibold">
            Lilian Karina Santiesteban Torres <br />
            Directora
          </p>
        </Col>
      </Row>
    </div>
  );
}
