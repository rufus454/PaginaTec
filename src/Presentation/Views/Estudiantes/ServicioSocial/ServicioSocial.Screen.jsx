import React from "react";
import { Helmet } from "react-helmet";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { withSwal } from "react-sweetalert2";

import EstudiantesCard from "@Components/Card/EstudiantesCard";
import PlusCard from "@Components/Card/PlusCard";
import StudentsBanner from "@Components/Estudiantes/StudentsBanner";
import { downloadIcon } from "@Utility/Icons.Helper";
import { generateTitle } from "@Utility/Layout.Helper";

export default withSwal((props, ref) => {
  const { swal, ...rest } = props;

  function handleClick() {
    swal.fire({
      show: true,
      title: "<strong>Archivos Necesarios</strong>",
      icon: "info",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Me sirve la información!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      html: `<p style="text-align:justify;">Plantilla AutoEvaluación Cualitativa Bimestral. <a href="/doc/estudiantes/ServicioSocial/PlantillaAutoEvaluacionCualitativaBimestralSS.docx" rel="noopener noreferrer">${downloadIcon}</a></p>
                    <p style="text-align:justify;">Plantilla Reporte Bimestral <a href="/doc/estudiantes/ServicioSocial/PlantillaReporteBimestralSS.doc" rel="noopener noreferrer">${downloadIcon}</a></p>
                    <p style="text-align:justify;">Plantilla Evaluación Actividades Prestador <a href="/doc/estudiantes/ServicioSocial/PlantillaEvaluacionActividadesPrestadorSS.doc" rel="noopener noreferrer">${downloadIcon}</a></p>
                    <p style="text-align:justify;">Plantilla Carta Terminación <a href="/doc/estudiantes/ServicioSocial/PlantillaCartaTerminacionSS.doc" rel="noopener noreferrer">${downloadIcon}</a></p>
                    <p style="text-align:justify;">Plantilla Evaluación Final <a href="/doc/estudiantes/ServicioSocial/PlantillaEvaluacionFinalSS.docx" rel="noopener noreferrer">${downloadIcon}</a></p>
                    `,
    });
  }

  return (
    <div>
      <Helmet>
        <title>{generateTitle("Servicio Social")}</title>
      </Helmet>

      <StudentsBanner url="/image/estudiantes/servicio.jpg">
        <div className="w-75">
          <h1 className="pt-md-5 pt-3 text-center">Servicio Social</h1>
          <h4 className="text-left">¿Qué es?</h4>
          <p className="text-left">
            Se entiende por servicio social el trabajo de carácter temporal y
            obligatorio, que institucionalmente presten y ejecuten los
            estudiantes en beneficio de la sociedad. Los/las estudiantes del
            Instituto Tecnológico prestarán el servicio social, para cumplir con
            los créditos del plan de estudios.
          </p>
          <h4 className="text-left">Objetivo del Servicio Social</h4>
          <p className="text-left">
            1. Convertir esta prestación en un acto de reciprocidad para con la
            sociedad a través de los planes y programas del sector público.
            <br />
            2. Contribuir a la formación académica y capacitación profesional
            del prestador del Servicio Social.
          </p>
          <h4 className="text-left">Dónde hacer el Servicio Social</h4>
          <p className="pb-2 pb-md-2 text-left">
            La prestación del Servicio Social puede realizarse en dependencias
            públicas, y organismos privados que cuenten con programas de
            asistencia social y desarrollo comunitario establecidos en el Plan
            Nacional de Desarrollo vigente
          </p>
          <div className="d-flex justify-content-center">
            <button
              className="btn bg-tec text-white border-white mb-4"
              onClick={handleClick}
            >
              Descargar archivos
            </button>
          </div>
        </div>
      </StudentsBanner>

      <div className="container">
        <div className="row my-5">
          <h4 className="text-center mb-5">Procedimiento</h4>
          <Tabs
            defaultActiveKey="first"
            id="fill-tab-servicios"
            className="mb-3"
            fill
          >
            <Tab eventKey="first" title="1. Requisitos">
              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="1)"
                  description="Los/las estudiantes pueden prestar su servicio social una vez aprobado el 70% de los créditos de los planes de estudio."
                />
                <EstudiantesCard
                  title="2)"
                  description="El Servicio Social tiene un valor de 10 créditos en los planes de estudio, donde un crédito equivale a 50 horas."
                />
                <EstudiantesCard
                  title="3)"
                  description="La duración del servicio social es de 500 horas (Asignación y Transferencia de Créditos Académicos)."
                />
                <EstudiantesCard
                  title="4)"
                  description="Para ser liberado el Servicio Social se tiene que cumplir con los 10 créditos en un periodo no menor de seis meses."
                />
              </div>
            </Tab>
            <Tab eventKey="second" title="2. Secuencia de Actividades">
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th className="my-auto" scope="col">
                      Estudiante
                    </th>
                    <th scope="col">
                      Departamento de gestion tecnologica y vinculación
                    </th>
                    <th scope="col">Dependencias</th>
                    <th scope="col">Descargar documento de:</th>
                    <th scope="col">Actividad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/103">
                        1. Formato de solicitud de prestadores de Servicio
                        Social
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      El estudiante lo descarga, lo lleva a la Dependencia para
                      su llenado, firma y sello, lo entrega en el Depto. De
                      GTyV, O en el grupo de Teams
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sii.itdelicias.edu.mx/">
                        2. Solicitud de Servicio Social ITD-VI-PO-002-01
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>SII</td>
                    <td>
                      El estudiante entra al SII, llena los datos en
                      computadora, no lo imprime.
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sii.itdelicias.edu.mx/">
                        3. Carta Compromiso de Servicio Social ITD-VI-PO-002-02
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>SII</td>
                    <td>
                      El estudiante entra al SII, llena los datos en
                      computadora, no lo imprime.
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/ITD-OT-002">
                        4. Plan de Trabajo
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      El estudiante la descarga, llena en computadora, lo
                      entrega en el Depto. De GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row"></td>
                    <td>
                      <a href="http://sii.itdelicias.edu.mx/">
                        5. Carta de Presentación para la realización del SS
                        ITD-VI-PO-002-03
                      </a>
                    </td>
                    <td></td>
                    <td>SII</td>
                    <td>
                      GTyV genera y lo entrega al estudiante o se lo envía a su
                      correo El estudiante la entrega en la Dependencia para su
                      firma y sello de recibido. Lo entrega en el Depto. De
                      GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>6. Carta de Aceptación</td>
                    <td>Formato Libre</td>
                    <td>
                      La Dependencia la genera, El estudiante Lo entrega en el
                      Depto. De GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/ITD-VI-PO-002-04">
                        7. Reporte Bimestral de Servicio Social ITD-VI-PO-002-04
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      El estudiante lo descarga, llena en computadora. Lo
                      entrega en el Depto. De GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                      , cada dos meses.
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/92">
                        8. Autoevaluación Cualitativa del Prestador de SS
                        ITD-VI-PO-002-07
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      El estudiante lo descarga, llena en computadora. Lo
                      entrega en el Depto. De GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                      , cada dos meses.
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/93">
                        9. Evaluación de las actividades del prestador de SS
                        ITD-VI-PO-002-09
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      Al final del Servicio Social, el estudiante la Descarga
                      para su llenado en computadora, lo firma y lo entrega en
                      el Depto. De GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/ITD-VI-PO-002-05">
                        10. Carta de Terminación del SS ITD-VI-PO-002-05
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      Al final del Servicio Social, el estudiante Descarga y
                      entrega a la dependencia ambos formatos para su llenado en
                      computadora, firma y sello; lo entrega en el Depto. De
                      GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a href="http://sig.itdelicias.edu.mx:8080/plantilla/94">
                        11. Evaluación Cualitativa final del prestador de SS
                        ITD-VI-PO-002-08
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Página web del ITD</td>
                    <td>
                      Al final del Servicio Social, el estudiante Descarga y
                      entrega a la dependencia ambos formatos para su llenado en
                      computadora, firma y sello; lo entrega en el Depto. De
                      GTyV, O en el grupo de{" "}
                      <a href="https://teams.microsoft.com/l/team/19%3apvM7iREWnh407L3w1ttdv8e3SpuNvNDrSVoeLOi13BM1%40thread.tacv2/conversations?groupId=2d7a4c24-a10a-43bd-bc9c-efbde1a15b6a&tenantId=8259419c-e614-4f79-ba11-357eda8f5a94">
                        Teams
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row"></td>
                    <td>
                      12. Constancia de terminación de SS ITD-VI-PO-002-06
                    </td>
                    <td></td>
                    <td>Base de datos de GTyV</td>
                    <td>
                      Al final del Servicio Social, GTyV la genera y entrega en
                      Servicios Escolares para su sello de recibido. Servicios
                      Escolares lo anexa al expediente del estudiante El
                      servicio social queda liberado
                    </td>
                  </tr>
                </tbody>
              </table>
            </Tab>
            <Tab eventKey="third" title="3. Servicio Social Formatos">
              <div className="row d-flex justify-content-center gap-5 mt-3">
                <PlusCard
                  // image={"/image/estudiantes/estudios.jpg"}
                  title={"Formatos"}
                  description={""}
                  content={`<h2>Formatos</h2>
                    <p style="margin-right: 10px">
                      REPORTE BIMESTRAL DEL SERVICIO SOCIAL
                    </p>
                    <p>EVALUACIÓN CUALITATIVA</p>
                    <p>AUTOEVALUACIÓN CUALITATIVA</p>
                    <p>EVALUACIÓN DE ACTIVIDADES</p>
                    <p>CARTA DE TERMINACION DE S.S.</p>
                    <p>CONSTANCIA DE TERMINACION</p>
                    <br />
                    <br />`}
                />
                <PlusCard
                  // image={"/image/estudiantes/estudios.jpg"}
                  title={"Formatos de Inicio de Servicio Social"}
                  description={""}
                  content={`<h2>Formatos de Inicio de Servicio Social</h2>
                    <p>CARTA DE PRESENTACIÓN</p>
                    <p>SOLICITUD DE SERVICIO SOCIAL</p>
                    <p>CARTA COMPROMISO DE SERVICIO SOCIAL</p>
                    <p>PLAN DE TRABAJO</p>
                    <p>CONSTANCIA DE ACEPTACION</p>
                    <br />
                    <br />`}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
});
