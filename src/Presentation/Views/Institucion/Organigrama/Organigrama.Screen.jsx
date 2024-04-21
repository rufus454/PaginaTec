import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Capa de datos
import organigramaData from "@Data/Institucion/organigrama.json";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
import OrganigramaCard from "@Components/Card/OrganigramaCard";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

/**
 * @type {import('@Entity/Institucion/Organigrama.Entity').Organigrama[]}
 */
const organigramas = organigramaData.cards;

export default function OrganigramaScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Organigrama")}</title>
      </Helmet>
      <TecBanner text="Organigramas Institucionales" />
      <Row className="d-flex justify-content-center w-100 m-0">
        {organigramas.map((item, index) => (
          <Col
            lg={3}
            md={6}
            sm={12}
            xs={12}
            key={`${item.name}-${index}`}
            className="p-5"
          >
            <OrganigramaCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
