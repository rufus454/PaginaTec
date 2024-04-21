import React from "react";
import { Helmet } from "react-helmet";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

//Capa de datos
import aportacionesData from "@Data/Estudiantes/aportaciones.json";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

const aportaciones = aportacionesData.aportaciones;

export default function AportacionesScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Aportaciones")}</title>
      </Helmet>

      <TecBanner text="Aportaciones" />

      <Container className="my-4">
        {aportaciones.map((aportacion, index) => (
          <Table key={index} striped bordered hover responsive>
            <thead>
              <tr>
                <th className="bg-tec text-white w-75">{aportacion.title}</th>
                <th className="bg-tec text-white w-25">{aportacion.secondTitle}</th>
              </tr>
            </thead>
            <tbody>
              {aportacion.rows.map((data, aportacionIndex) => (
                <tr key={aportacionIndex}>
                  <td>{data.first}</td>
                  <td>${data.second}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ))}
      </Container>
    </div>
  );
}
