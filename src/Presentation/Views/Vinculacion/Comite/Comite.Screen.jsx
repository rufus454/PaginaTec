import React from "react";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";

//UI
import styles from "./Comite.module.css";
//Data
import { comiteData } from "@Data/Vinculacion/comite";
//Presentation
import Title from "@Components/General/Title";
//Utility
import { generateTitle } from "@Utility/Layout.Helper";

const images = comiteData.images;

export default function ComiteScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Comité")}</title>
      </Helmet>
      <div className="container">
        <Title text="Comité de Vinculación" isPage />
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
              <strong>¿Qué es el comité?</strong>
            </h6>
            <p className="text-justify">
              En los Institutos, Unidades y Centros adscritos al TecNM, se
              constituirán Comités de Vinculación, para coordinar la
              participación de la comunidad y los sectores productivos en el
              desarrollo de las actividades de la Institución. Estará integrado
              por los titulares de diferentes áreas del plantel, y será el
              vínculo con los sectores productivos y la comunidad.
              <br /> El Comité de Vinculación funcionará como órgano de consulta
              y coordinación de las Instituciones del TecNM.
            </p>

            <h6>
              <strong>Miembros del comité</strong>
            </h6>
            <div className="w-100">
              <table className={styles.members}>
                <tr>
                  <td colspan="3">
                    Lilián Karina Santiesteban Torres <br /> Presidente
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                    Comisario
                  </td>
                  <td>
                    <br />
                    Secretario Ejecutivo
                  </td>
                  <td>
                    Hilario Ramírez Moreno
                    <br />
                    Secretario de Actas
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <b>VOCALES</b>
                  </td>
                </tr>
                <tr>
                  <td>Mirna Aracely Acosta Rodríguez</td>
                  <td>Julieta Martínez Cereceres</td>
                  <td>Antonio Álvarez Sánchez</td>
                </tr>
                <tr>
                  <td>Raúl Vásquez Tiscareño</td>
                  <td>David Álvarez Sánchez</td>
                  <td>Javier Hinostroza Alcantar</td>
                </tr>
                <tr>
                  <td>Roció Catalina Nevarez González</td>
                  <td>Erick Abdul Ayabar Valles</td>
                  <td>Luz María Rodríguez Pérez</td>
                </tr>
                <tr>
                  <td>Osvaldo Javier Díaz Ávila</td>
                  <td colspan="2">Elda Irasema Baeza Guevara</td>
                </tr>
              </table>
            </div>

            <h6>
              <strong>Convocatorias</strong>
            </h6>
            <p className="text-justify">
              De acuerdo con los Lineamientos Para La Conformación Y Operación
              Del Consejo Y Comité De Vinculación Académica-Sector Productivo De
              Los Institutos, Unidades Y Centros Que Integran El Tecnológico
              Nacional De México, Artículo 39, se convoca a los integrantes del
              Comité de Vinculación del Instituto Tecnológico de Delicias a la
              Primera Sesión Extraordinaria que se llevará a cabo el próximo
              viernes 07 de mayo del presente a las 10:00 hrs, en las
              Instalaciones del Auditorio de Ingeniería Industrial, de acuerdo
              al siguiente Orden del Día:
            </p>
            <div className="ml-5">
              <ol className={styles.listaVinculacion}>
                <li>Lista de asistencia y declaración de quorum.</li>
                <li>Presentación y aprobación del Orden del Día.</li>
                <li>Lectura y aprobación de la acta anterior.</li>
                <li>Seguimiento de acuerdos anteriores.</li>
                <li>Generación de nuevos acuerdos.</li>
                <li>Cierre de la reunión.</li>
              </ol>
            </div>

            <h6>
              <strong>Fechas de sesiones ordinarias</strong>
            </h6>
            <div className={styles.fechasConsejo}>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Abril</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Miércoles
                  <br />
                  21
                </div>
              </div>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Julio</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Lunes
                  <br />
                  12
                </div>
              </div>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Octubre</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Viernes
                  <br />
                  08
                </div>
              </div>
              <div className={styles.fechaConsejoElement}>
                <div className={styles.fechaConsejoElementTop}>Diciembre</div>
                <div className={styles.fechaConsejoElementBottom}>
                  Martes
                  <br />
                  14
                </div>
              </div>
            </div>

            <h6>
              <strong>Actividades del Comité</strong>
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
                  <td>Organización de festejos del XXXV aniversario.</td>
                  <td>Comité</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Proponer a tres candidatos a representantes de la Comunidad
                    del IT, que apoyaran a cada comisión.
                  </td>
                  <td>Las tres comisiones</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Feria de residencias profesionales.</td>
                  <td>Todo el Consejo</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Proponer actividades para promover la participación en
                    eventos culturales, cívicos, deportivos y académicos, así
                    como en proyectos productivos y tecnológicos.
                  </td>
                  <td>
                    Comisión De Apoyo A La Competitividad Y Mercado Laboral
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Establecer mecanismos para apoyar la prestación del Servicio
                    Social, la realización de Residencias Profesionales,
                    estancias y estadías de los alumnos y docentes de la
                    Institución. (Bancos de proyectos)
                  </td>
                  <td>
                    Comisión De Apoyo A La Competitividad Y Mercado Laboral
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Proponer criterios y actividades para socializar y promover
                    la Bolsa de Trabajo de la Institución.
                  </td>
                  <td>
                    Comisión De Apoyo A La Competitividad Y Mercado Laboral
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Promover y apoyar la oferta de cursos de capacitación,
                    especialización y actualización ante los sectores
                    productivos en el entorno de la institución (Servicio
                    Externo).
                  </td>
                  <td>Comisión De Extensión Y Vinculación Académica</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Definir las estrategias para fortalecer y consolidar la
                    oferta de educativa en la comunidad en general y los
                    sectores.
                  </td>
                  <td>Comisión De Extensión Y Vinculación Académica</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Gestionar entre la comunidad y los diferentes sectores, la
                    donación de equipo, maquinaria, herramientas e insumos para
                    talleres y laboratorios, que apoyen la formación de los/las
                    estudiantes.
                  </td>
                  <td>Comisión De Extensión Y Vinculación Académica</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Reunión virtual con personal del INEGI.</td>
                  <td>Comité</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
