import React from "react";
import { Helmet } from "react-helmet";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

export default function AcreditacionInglesScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Acreditación de Inglés")}</title>
      </Helmet>
      <TecBanner text="Acreditación de Inglés" />

      <div className="row flex justify-content-center mt-4">
        <h3 className="text-center w-100">
          <b>COORDINACIÓN DE LENGUAS EXTRANJERAS</b>
        </h3>{" "}
        <br /> <br />
        <div className="w-75">
          <p className="text-justify">
            Mercado laboral y la nueva sociedad requiere de profesionistas
            capaces de trascender más allá de las fronteras de nuestro país e ir
            más allá de los límites nacionales tradicionales. Nos preparamos
            para generar profesionistas para el mundo, capaces de desempeñarse
            en modo global, interactuando con la comunidad del conocimiento en
            todos los confines del planeta. La innovación constante es
            enriquecida por los aportes que en todo el mundo son desarrollados
            por ingenieros de todas las razas, en un mundo profesional donde la
            comunicación y la interrelación entre la comunidad que genera
            conocimientos, no están limitados a un solo idioma. La Coordinación
            de Lenguas Extranjeras del Instituto Tecnológico de Delicias, a
            través de los años, ha mantenido su hegemonía local como proveedora
            del servicio de enseñanza del idioma inglés, tanto para la comunidad
            de Ciudad Delicias, que en forma de servicio externo se ofrece el
            inglés como segundo idioma; así como también para ofrecer a nuestros
            alumnos la capacitación en la adquisición de la competencia de
            dominio de un segundo idioma, en este caso el Idioma Inglés.
          </p>
        </div>
        <h2 className="text-center w-100">Planes de estudio</h2>
      </div>

      <div className="container">
        <Tabs
          defaultActiveKey="first"
          id="fill-tab-servicios"
          className="mb-3"
          fill
        >
          <Tab eventKey="first" title="2015 A LA FECHA">
            <p className="text-justify">
              Del manual de Lineamientos Académico-administrativos del TecNM en
              el CAPÍTULO 14. LINEAMIENTO PARA LA TITULACIÓN INTEGRAL, apartado
              14.4.1.2, indica como requisito para la titulación integral, la
              acreditación de un programa de lengua extranjera
            </p>
            <p className="text-justify">
              En la Coordinación de Lenguas extranjeras del ITD, se tienen las
              siguientes opciones para la liberación de tal requisito:
            </p>
            <p className="text-justify text-dark">
              ● Presentando un certificado de nivel B1, de acuerdo al MCER,
              emitido por instancias reconocida nacional y/o internacionalmente
              tales como: ETS (TOEIC, TOEFL), Trinity, Cambridge Y CENNI.
              <br />
              ● Presentando y acreditando un examen de cuatro habilidades en la
              Coordinación de lenguas extranjeras del ITD, demostrando el nivel
              B1 (La competencia lingüística del idioma se puede adquirir por
              otro medio tal como: de manera autodidacta o en cualquier otra
              institución). <br />● Acreditar el programa académico de inglés,
              de la Coordinación de Lenguas Extranjeras del ITD, que consta de
              10 Niveles de 45 hrs. cada uno, de acuerdo al siguiente mapa
              modular.
            </p>
            <table className="table mt-2">
              <thead>
                <tr>
                  <th>
                    <b>NIVEL</b>
                  </th>
                  <th>
                    <b>NIVELES MCER (MARCO COMÚN EUROPEO DE REFERENCIA)</b>
                  </th>
                  <th>
                    <b>NÚMERO DE HORAS POR CURSO</b>
                  </th>
                </tr>
              </thead>
              <tbody id="dataBody">
                {" "}
                <tr>
                  <td>Nivel 1</td>
                  <td className="text-center">A1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 2</td>
                  <td className="text-center">A1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 3</td>
                  <td className="text-center">A1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 4</td>
                  <td className="text-center">A2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 5</td>
                  <td className="text-center">A2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 6</td>
                  <td className="text-center">B1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 7</td>
                  <td className="text-center">B1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 8</td>
                  <td className="text-center">B1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 9</td>
                  <td className="text-center">B1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 10</td>
                  <td className="text-center">B1</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 11</td>
                  <td className="text-center">B2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Nivel 12 (Opcional)</td>
                  <td className="text-center">B2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Preparación examen CENNI (Opcional)</td>
                  <td className="text-center">B2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Conversación (Opcional)</td>
                  <td className="text-center">B2</td>
                  <td className="text-center">45</td>
                </tr>
                <tr>
                  <td>Inglés técnico para ingenieros (Opcional)</td>
                  <td className="text-center">B2</td>
                  <td className="text-center">45</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="second" title="2004 AL 2014">
            <p className="text-center">
              Presentar Examen de Liberación 2. Acreditar dominio en las 4
              habilidades:
            </p>
            <p>
              ● Leer
              <br />
              ● Escribir
              <br />
              ● Hablar
              <br />
              ● Escuchar (Comprensión)
              <br />
            </p>

            <div className="border border-dark rounded text-center">
              SOLICITUD DE EXÁMENES, EN LA COORDINACIÓN DE LENGUAS EXTRANJERAS
              DEL INSTITUTO TECNOLÓGICO DE DELICIAS
            </div>
          </Tab>
          <Tab eventKey="third" title="1993 A 2003">
            <p className="text-center">
              Presentar Examen de Liberación 1. Traducción de artículo técnico
              científico.
            </p>
            <div className="border border-dark rounded text-center">
              SOLICITUD DE EXÁMENES, EN LA COORDINACIÓN DE LENGUAS EXTRANJERAS
              DEL INSTITUTO TECNOLÓGICO DE DELICIAS
            </div>
          </Tab>
          <Tab eventKey="four" title="1986 A 1992">
            <div className="border border-dark rounded text-center">
              EXENTO DE REQUISITO DE INGLÉS
            </div>
          </Tab>
        </Tabs>

        <div className="d-flex justify-content-center my-4 flex-row">
          <div className="mx-3">
            <b>ING. Elda Irasema Baeza Guevara</b> <br />
            <b>Jefa del Depto. de Gestión Tecnológica y Vinculación</b> <br />
            Correo: vin_delicias@tecnm.mx
          </div>
          <div className="mx-3">
            <b>ARQ. María De Los Angeles Mata Sáenz</b> <br />
            Coordinadora de Lenguas Extranjeras <br />
            Correo: leng_delicias@tecnm.mx
          </div>
          <div className="mx-3">
            <b>Tecnológico Nacional de México campus Delicias</b> <br />
            Paseo Tecnológico Km. 3.5
            <br /> C.P. 33000 Cd. Delicias, Chihuahua.
            <br /> Tel. (639) 132 65 00 ext. 202 <br />
            www.tecnm.mx | www.delicias.tecnm.mx
          </div>
        </div>
      </div>
    </div>
  );
}
