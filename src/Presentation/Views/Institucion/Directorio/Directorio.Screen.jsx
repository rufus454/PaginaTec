import React from "react";
import { Helmet } from "react-helmet";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

import directoryData from "@Data/Institucion/directorio.json";

const data = directoryData.directory;

export default function DirectorioScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Directorio")}</title>
      </Helmet>
      <TecBanner text="Directorio Departamentos" />
      <Accordion
        className="mt-5 px-5
      (max-width: 768px) px-0"
      >
        {data.map((item, index) => {
          let headerCount = [];
          return (
            <Accordion.Item
              key={`${item.title}-${index}`}
              eventKey={index}
              className="mb-4"
            >
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      {item.headers.map((header, index) => {
                        headerCount.push(index);
                        return <th key={`${header}-${index}`}>{header}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, index) => {
                      return (
                        <tr key={`${row}-${index}`}>
                          {headerCount.map((header, index) => {
                            return (
                              <td key={`${header}-${index}`}>{row[header]}</td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
