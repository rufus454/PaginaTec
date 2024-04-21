import React from "react";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";

//UI
import styles from "./Consejo.module.css";
//Data
import { consejoData } from "@Data/Vinculacion/consejo.js";
//Presentation
import Title from "@Components/General/Title";
//Utility
import { generateTitle } from "@Utility/Layout.Helper";

const images = consejoData.images;

const table = consejoData.table;

export default function ConsejoScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Consejo")}</title>
      </Helmet>

      <div className="container">
        <Title text="Consejo de Vinculación" isPage />
        <div className="row mt-3">
          <div className="col-12 col-md-4">
            {images.map((image, index) => (
              <Image
                key={index}
                loading="lazy"
                style={{ height: "500px", objectFit: "cover" }}
                className="d-block w-100 pb-3"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

          <div className="col-12 col-md-8">
            <h6>
              <strong>¿Qué es el consejo?</strong>
            </h6>
            <p className="text-justify">
              En cada uno de los Institutos, Unidades y Centros, se constituirá
              el Consejo de Vinculación, integrado con la representación de los
              Sectores Público, Social, Privado y de la propia Institución. Este
              Consejo será un órgano de carácter consultivo y tendrá el encargo
              de consensuar la pertinencia del rumbo de la Institución, de su
              oferta educativa, así como fortalecer los servicios que la
              Institución preste a su entorno, así como opinar sobre su
              desempeño y el impacto de sus acciones.
            </p>

            <h6>
              <strong>Miembros del consejo</strong>
            </h6>
            <div className="w-100">
              <table className={styles.members}>
                {table.map((tableElement, index) => (
                  <>
                    <tr key={index}>
                      <td
                        colSpan={3}
                        dangerouslySetInnerHTML={{ __html: tableElement.title }}
                      ></td>
                    </tr>

                    {tableElement.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            dangerouslySetInnerHTML={{ __html: cell }}
                          ></td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </table>
            </div>

            <h6>
              <strong>Convocatorias</strong>
            </h6>
            <p className="text-justify">
              De acuerdo con los Lineamientos Para La Conformación Y Operación
              Del Consejo Y Comité De Vinculación Académica-Sector Productivo De
              Los Institutos, Unidades Y Centros Que Integran El Tecnológico
              Nacional De México, Artículo 14, se convoca a los integrantes del
              Consejo de Vinculación del Instituto Tecnológico de Delicias a la
              Primera Sesión Ordinaria que se llevará a cabo el próximo
              miércoles 16 de junio del presente a las 17:00 hrs, de manera
              virtual a través de la plataforma Microsoft teams, con enlace que
              previamente se les enviara, de acuerdo al siguiente Orden del Día:
            </p>
            <div className="ml-5">
              <ol className={styles.listaVinculacion}>
                <li>Lista de asistencia y declaración de quorum.</li>
                <li>Presentación y aprobación del Orden del Día.</li>
                <li>Lectura y aprobación de la minuta anterior.</li>
                <li>Programa anual de acciones del Consejo De Vinculación.</li>
                <li>Definición de fechas de sesiones para el año 2021.</li>
                <li>Asuntos generales.</li>
                <li>Cierre de la reunión.</li>
              </ol>
            </div>

            <h6>
              <strong>Fechas de sesiones ordinarias</strong>
            </h6>
            <div className={styles.fechasConsejo}>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Junio</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Miércoles
                  <br />
                  16
                </div>
              </div>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Agosto</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Miércoles
                  <br />
                  04
                </div>
              </div>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Octubre</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Miércoles
                  <br />
                  06
                </div>
              </div>
            </div>

            <h6>
              <strong>Actividades del consejo</strong>
            </h6>
            <div className="w-100">
              <table className={styles.members}>
                <tr>
                  <td>
                    <b>No</b>
                  </td>
                  <td>
                    <b>ACTIVIDAD</b>
                  </td>
                  <td>
                    <b>RESPONSABLE</b>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diplomado en habilidades blandas</td>
                  <td>
                    Elda I. Baeza Guevara
                    <br />
                    Goretty Machorro Luna
                    <br />
                    Hilario Ramírez Moreno
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Open house empresarial</td>
                  <td>Todo el Consejo</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Feria de residencias profesionales</td>
                  <td>Todo el Consejo</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
