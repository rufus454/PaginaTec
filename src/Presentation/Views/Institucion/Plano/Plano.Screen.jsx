import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "./Plano.module.css";
import { generateTitle } from "@Utility/Layout.Helper";

export default function PlanoScreen() {
  const openImage = (e, src) => {
    e.preventDefault;
    window.open(src, "_blank");
  };

  return (
    <div>
      <Helmet>
        <title>{generateTitle("Plano del Instituto")}</title>
      </Helmet>
      <Row className="d-flex justify-content-center my-4">
        <Col
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="d-flex justify-content-center"
        >
          <figure>
            <Image
              src="/image/institucion/plano/PlanoTecDelicias-mostrar.png"
              alt="Plano del Instituto"
              className={styles.image}
              fluid
            />
            <figcaption className="mt-2 text-center">
              Plano del instituto{" "}
              <a
                onClick={(e) =>
                  openImage(
                    e,
                    "/image/institucion/plano/PlanoTecDelicias-mostrar.png"
                  )
                }
                className="btn btn-tec"
                title="Descargar imagen del plano del instituto"
              >
                Descargar
              </a>
            </figcaption>
          </figure>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="d-flex justify-content-center"
        >
          <figure>
            <Image
              src="/image/institucion/plano/PlanoDirectorioDeEdificios-mostrar.png"
              alt="Plano de los edificios del Instituto"
              className={styles.image}
              fluid
            />
            <figcaption className="mt-2 text-center">
              Plano de los edificios del Instituto{" "}
              <a
                onClick={(e) =>
                  openImage(
                    e,
                    "/image/institucion/plano/PlanoDirectorioDeEdificios.png"
                  )
                }
                className="btn btn-tec"
                title="Descargar imagen del plano de los edificios del instituto"
              >
                Descargar
              </a>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </div>
  );
}
