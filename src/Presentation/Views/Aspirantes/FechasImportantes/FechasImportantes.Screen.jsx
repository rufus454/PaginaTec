import React from "react";
import { Helmet } from "react-helmet";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

//Capa de datos
import fechasData from "@Data/Aspirantes/fechas.json";
//Capa de presentación
import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

/**
 * @type {import('@Entity/Aspirantes/Fecha.Entity').Fecha[]}
 */
const fechas = fechasData.dates;

export default function FechasImportantesScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Fechas Importantes")}</title>
      </Helmet>

      <TecBanner text="Fechas Importantes" />

      <Container className="my-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="bg-tec text-white">Descripción</th>
              <th className="bg-tec text-white">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {fechas.map((fecha, index) => (
              <tr key={index}>
                <td>{fecha.description}</td>
                <td>{fecha.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
