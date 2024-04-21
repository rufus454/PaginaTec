import React from "react";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import styles from "./ModeloEducativo.module.css";
import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

export default function ModeloEducativoScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Modelo Educativo")}</title>
      </Helmet>
      <TecBanner text="MODELO EDUCATIVO PARA EL SIGLO XXI" />
      <Container className={styles.wrapper}>
        El Modelo Educativo para el Siglo XXI: Formación y desarrollo de
        competencias profesionales orienta el proceso educativo central a la
        formación de profesionales que impulsen la actividad productiva en cada
        región del país, la investigación científica, la innovación tecnológica,
        la transferencia de tecnologías, la creatividad y el emprendedurismo
        para alcanzar un mayor desarrollo social, económico, cultural y humano.
        Estamos seguros de que nuestros egresados serán aptos para contribuir en
        la construcción de la sociedad del conocimiento, participar en los
        espacios comunes de la educación superior tecnológica y asumirse como
        actores protagónicos del cambio.
        <a href="/doc/Institucion/ModeloEducativo.pdf" target="_blank">
          <Image
            src="/image/institucion/modelo/modelo.jpg"
            alt="Modelo Educativo"
            fluid
            className="my-4"
          />
        </a>
      </Container>
    </div>
  );
}
