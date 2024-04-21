import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SiteLink from "./SiteLink";
import sitesData from '@Data/Inicio/sitios.json';

/**
 * @type {Array<import('@Entity/Inicio/Sitios.Entity').Sitios>}
 */
const sites = sitesData.sites;

const Map = () => {
  return (
    <Row className="bg-tec d-flex justify-content-evenly text-white">
      <Col className="p-5">
        <h4>Dirección</h4>
        <span className="mb-5">
          Paseo Tecnológico Km 3.5 Cd. Delicias, Chihuahua. México. C.P. 33000
        </span>

        <h4 className="mt-5">Contacto:</h4>
        <span>Teléfono: (639) 472-0000</span>
      </Col>
      <Col className="p-5 d-flex flex-column">
        <h4>Sitios Internos</h4>
        {
          sites.map((site, index) => (
            <SiteLink key={index} href={site.href}>
              {site.title}
            </SiteLink>
          ))
        }
      </Col>
      <Col className="d-flex justify-content-center align-items-center" lg={6}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7031.5436395444385!2d-105.4313366!3d28.2142444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86eb14e714fd6c8f%3A0x50485ca083364c91!2sInstituto%20Tecnol%C3%B3gico%20de%20Delicias%2C%2033100%20Delicias%2C%20Chih.!5e0!3m2!1sen!2smx!4v1711172780013!5m2!1sen!2smx"
          width="700"
          height="500"
          className="border-0 py-4"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Col>
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="text-white text-center py-3"
      >
        <span>
          &copy; Copyright {new Date().getFullYear()} TecNM - Todos los Derechos
          Reservados
        </span>
      </Col>
    </Row>
  );
};

export default Map;
