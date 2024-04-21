import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TecBanner from "@Components/General/TecBanner";
import { generateTitle } from "@Utility/Layout.Helper";

export default function DirectorioServiciosScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Directorio de Servicios")}</title>
      </Helmet>
      <TecBanner text="Directorio de Servicios" />
      <Row className="justify-content-sm-center my-2">
        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>División De Estudios Profesionales</b>
            </h5>
            <br />
            <b>Ubicación:</b> Planta baja del edificio administrativo
            <br />
            <b>Teléfono:</b> 639 1592676
            <br />
            <b>Correo electrónico:</b> divestudios@delicias.tecnm.mx
            <br />
            <ul>
              <li>
                <a href="http://sii.itdelicias.edu.mx">Inscripción</a>
              </li>
              <li>
                <a href="http://sii.itdelicias.edu.mx">Reinscripción</a>
              </li>
              <li>
                <a href="/doc/Estudiantes/Tramites/Solicitud_al_comite_academico.pdf">
                  Baja parcial de materias
                </a>
              </li>
              <li>
                <a href="/doc/Estudiantes/Tramites/Solicitud_al_comite_academico.pdf">
                  Baja temporal
                </a>
              </li>
              <li>Asesoría personalizada para seguimiento académico</li>
              <li>
                <a href="/estudiantes/residencia">Residencia Profesional</a>
              </li>
              <li>
                <a href="/estudiantes/titulacion-integral">
                  Proceso de titulación
                </a>
              </li>
              <li>
                <a href="http://sig.itdelicias.edu.mx:8080/quejasysugerencias">
                  Atención a quejas de alumnos referentes a lo académico
                </a>
              </li>
              <li>
                <a href="/doc/Estudiantes/Tramites/Solicitud_al_comite_academico.pdf">
                  Solicitudes ante el comité académico
                </a>
              </li>
              <li>
                <a href="/estudiantes/cambio-de-carrera">Cambio de carrera</a>
              </li>
              <li>
                <a href="/estudiantes/traslados">Traslado</a>
              </li>
              <li>
                <a href="/estudiantes/movilidad-estudiantil">Movilidad</a>
              </li>
            </ul>
          </p>
        </Col>

        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>Servicios Escolares</b>
            </h5>
            <br />
            <b>Ubicación:</b> Planta baja del edificio administrativo
            <br />
            <b>Teléfono:</b> 639 1593901
            <br />
            <b>Correo electrónico:</b> servicios.escolares@delicias.tecnm.mx
            <br />
            <ul>
              <li>Constancias</li>
              <li>Boletas</li>
              <li>Kardex</li>
              <li>Credenciales</li>
              <li>Certificados Incompletos</li>
              <li>Certificados Completos</li>
              <li>Consulta de Créditos complementarios</li>
              <li>Alta de Servicio Médico IMSS</li>
              <li>Tramite de Beca por Orfandad</li>
              <li>
                Tramite de titulación, documentos que deben entregar en
                Servicios Escolares
              </li>
              <li>
                Alta en la plataforma del SUBES para participar en las becas
                federales
              </li>
            </ul>
          </p>
        </Col>
      </Row>

      <Row className="justify-content-sm-center my-2">
        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>Gestión Tecnológica y Vinculación</b>
            </h5>
            <br />
            <b>Ubicación:</b> Planta alta del edificio administrativo
            <br />
            <b>Teléfono:</b> 1593076
            <br />
            <b>Correo electrónico:</b> servicios.gestiontec@delicias.tecnm.mx
            <br />
            <ul>
              <li>
                <a href="/estudiantes/acreditacion-ingles">Inglés</a>
              </li>
              <li>
                <a href="/estudiantes/servicio-social">Servicio social</a>
              </li>
            </ul>
          </p>
        </Col>

        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>Desarrollo Académico</b>
            </h5>
            <br />
            <b>Ubicación:</b> - <br />
            <b>Teléfono:</b> 639 1681321
            <br />
            <b>Correo electrónico:</b> dacademico@delicias.tecnm.mx
            <br />
            <ul>
              <li>
                <a href="/aspirantes/proceso-de-admision">Fichas</a>
              </li>
              <li>
                <a href="http://distancia.delicias.tecnm.mx/moodle/">Moodle</a>
              </li>
              <li>Tutorías</li>
            </ul>
          </p>
        </Col>
      </Row>

      <Row className="justify-content-sm-center my-2">
        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>Extraescolares</b>
            </h5>
            <br />
            <b>Ubicación:</b> A un costado de la cafetería <br />
            <b>Teléfono:</b> 639 1592052
            <br />
            <b>Correo electrónico:</b> aextraescolares@delicias.tecnm.mx
            <br />
            <ul>
              <li>Atletismo</li>
              <li>Voleibol femenil</li>
              <li>Voleibol varonil</li>
              <li>Futbol Soccer</li>
              <li>Banda de Guerra (varonil y femenil)</li>
              <li>Rondalla</li>
              <li>Danza Folclórica</li>
              <li>Teatro</li>
              <li>Escolta</li>
            </ul>
          </p>
        </Col>

        <Col md={5} className="justify-content-center align-content-center">
          <p className="text-justify">
            <h5>
              <b>Centro de Información</b>
            </h5>
            <br />
            <b>Ubicación:</b> En frente de la explanada principal <br />
            <b>Teléfono:</b> 639 1592052
            <br />
            <b>Correo electrónico:</b> cinformacion@delicias.tecnm.mx
            <br />
            <ul>
              <li>
                <a href="https://elibro.net/es/lc/itdelicias/login_usuario/?next=/es/ereader/itdelicias/122933?page=29">
                  E-Libro
                </a>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  );
}
