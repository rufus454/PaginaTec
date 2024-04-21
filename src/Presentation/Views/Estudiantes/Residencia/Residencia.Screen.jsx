import React from "react";
import { Helmet } from "react-helmet";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { withSwal } from "react-sweetalert2";

import EstudiantesCard from "@Components/Card/EstudiantesCard";
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
      html: `<p style="text-align:justify;">Calendario Residencias Enero - Junio 2023 <a href="/doc/estudiantes/Residencia/CalendarioResidenciasEneroJunio2023.pdf" rel="noopener noreferrer"> ${downloadIcon}</a></p> <p style="text-align:justify;">Plantilla Solicitud Residencia <a href="/doc/estudiantes/Residencia/PlantillaSolicitudResidencia.docx"rel="noopener noreferrer"> ${downloadIcon}</a></p><p style="text-align:justify;">Formato Anteproyecto <a href="/doc/estudiantes/Residencia/FormatoAnteproyecto.docx"rel="noopener noreferrer"> ${downloadIcon}</a></p><p style="text-align:justify;">Plantilla Seguimiento Proyecto Residencia <a href="/doc/estudiantes/Residencia/PlantillaSeguimientoProyectoResidencia.doc"rel="noopener noreferrer"> ${downloadIcon}</a></p><p style="text-align:justify;">Plantilla Evaluacion Residencia <a href="/doc/estudiantes/Residencia/PlantillaEvaluacionResidencia.doc"rel="noopener noreferrer"> ${downloadIcon}</a></p><p style="text-align:justify;">Reporte Final de Residencia Profesional <a href="/doc/estudiantes/Residencia/EstructuraReporteFinaldeResidenciaProfesional.docx"rel="noopener noreferrer"> ${downloadIcon}</></p>`,
    });
  }

  const handleClickInfoElige = () => {
    swal.fire({
      show: true,
      title: "<strong>Proyectos aceptados:</strong>",
      icon: "info",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Me sirve la información!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      html: `Proyecto de Investigación <br />
                                        Proyecto de Desarrollo Tecnológico<br />
                                        Proyecto Integrador<br />
                                        Proyecto Productivo<br />
                                        Proyecto de Innovación Tecnológica<br />
                                        Proyecto de Emprendedurismo o Estancia<br />`,
    });
  };

  const handleClickInfoSolicita = () => {
    swal.fire({
      show: true,
      title: "<strong>Nota:</strong>",
      icon: "info",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Me sirve la información!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      html: `El alumno que envíe la documentación requerida vía correo electrónico, se compromete a entregar los formatos en físico en las fechas establecidas por la institución.`,
    });
  };

  const handleClickInfoNotificacion = () => {
    swal.fire({
      show: true,
      title: "<strong>Nota:</strong>",
      icon: "info",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Me sirve la información!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      html: `El Departamento de Gestión Tecnológica y Vinculación hará del conocimiento del alumno solicitante el día y la hora a la que puedan presentarse por dicha documentación, o se enviará a su correo electrónico.
Entrega carta de presentación a la empresa para firma y sello de recibido.`,
    });
  };

  return (
    <div>
      <Helmet>
        <title>{generateTitle("Residencia")}</title>
      </Helmet>

      <StudentsBanner url="/image/estudiantes/ing.jpg">
        <div className="w-75">
          <h1 className="pt-md-5 pt-3 text-center">Residencia</h1>
          <h4 className="text-left">¿Qué es?</h4>
          <p className="text-left">
            Es una estrategia educativa, con carácter curricular que permite al
            estudiante, aún en proceso de formación, incorporarse
            profesionalmente a los sectores productivos de bienes y servicios.
            Lo que le permitirá complementar y fortalecer las competencias
            adquiridas en el aula, en una estancia empresarial, no menor a 4
            meses y ni mayor a 6 meses, y lo preparará para afrontar los retos
            laborales actuales.
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
            <Tab eventKey="first" title="1. Elige">
              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Busca un proyecto en una Empresa"
                />
                <EstudiantesCard
                  title="B)"
                  description="Pregunta por los proyectos de residencia que tiene el tecnológico."
                />
                <EstudiantesCard
                  title="C)"
                  description="Si trabajas en una empresa, puedes proponer tu propio proyecto."
                />
                <EstudiantesCard
                  title="D)"
                  description="A través de los diferentes proyectos que la Institución fomente"
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <button
                  className="btn bg-tec text-white border-white mb-4"
                  onClick={handleClickInfoElige}
                >
                  Tipos de Proyectos
                </button>
              </div>
            </Tab>
            <Tab eventKey="second" title="2. Solicita">
              <h4 className="semi-bold">2. Solicita Residencia:</h4>
              <p>
                Solicita residencia Profesional ante la División de Estudios
                Profesionales (DEP), a través de las siguientes alternativas:
              </p>
              <h5>
                A). Envía vía correo electrónico a{" "}
                <a href="mailto:residencias@delicias.tecnm.mx">
                  residencias@delicias.tecnm.mx
                </a>{" "}
                los siguientes archivos en formato PDF:
              </h5>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Solicitud del formato ITD-AC-PO-007-01."
                />
                <EstudiantesCard
                  title="B)"
                  description="Constancia de avance, solicitarlo en el departamento de servicios escolares."
                />
                <EstudiantesCard
                  title="C)"
                  description="Elaboración de anteproyecto según necesidades de la empresa."
                />
              </div>

              <h5 className="mt-3">
                B). Entrega de manera física, cuando te lo indiquen a través del
                correo de residencias@delicias.tecnm.mx:
              </h5>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Dos Solicitudes del formato ITD-AC-PO-007-01 en original, con firma autógrafa en bolígrafo"
                />
                <EstudiantesCard
                  title="B)"
                  description="Constancia de avance, solicitarlo en el departamento de servicios escolares."
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <button
                  className="btn bg-tec text-white border-white mb-4"
                  onClick={handleClickInfoSolicita}
                >
                  Más información
                </button>
              </div>
            </Tab>
            <Tab eventKey="third" title="3. Notificación">
              <h4 className="semi-bold">3. Notificación de tu asesor:</h4>
              <p>
                El Departamento de División de Estudios Profesionales, notifica
                por el correo electrónico la asignación de asesor,
                posteriormente a esto, pasara al departamento para la entrega
                del oficio de dicha asignación.
              </p>
            </Tab>
            <Tab eventKey="fourth" title="4. Carta">
              <h4 className="semi-bold">
                4. Solicita Carta de Presentación y Convenio:
              </h4>
              <p>
                Una vez que el anteproyecto ha sido autorizado solicita al
                Depto. De Gestión Tecnológica y Vinculación (DGTyV) de manera
                física o vía correo electrónico
                (residenciatec@delicias.tecnm.mx) carta de presentación
                definitiva y convenio proporcionando los siguientes requisitos:
              </p>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Nombre completo del alumno."
                />
                <EstudiantesCard title="B)" description="Número de Control." />
                <EstudiantesCard
                  title="C)"
                  description="Monto de la beca que la empresa le otorgará durante su residencia"
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <button
                  className="btn bg-tec text-white border-white mb-4"
                  onClick={handleClickInfoNotificacion}
                >
                  Más información
                </button>
              </div>
            </Tab>
            <Tab eventKey="fifth" title="5. Aceptación">
              <h4 className="semi-bold">
                5. Entrega carta de aceptación a DGTyV:
              </h4>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="La empresa genera carta de aceptación al estudiante con firma y sello."
                />
                <EstudiantesCard
                  title="B)"
                  description="El alumno entrega cartas de Presentación y Aceptación al Depto. De Vinculación, selladas de recibido"
                />
              </div>
            </Tab>
            <Tab eventKey="sixth" title="6. Comienza">
              <h4 className="semi-bold">
                6. Ponte en contacto con tu Asesor(a) Interno(a) y Externo(a) e
                Inicia Residencia:
              </h4>
              <p>
                El alumno residente entrega al departamento académico
                correspondiente, los documentos que a continuación se detallan:
              </p>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="El alumno se presenta con su asesor(a) interno(a) y externo(a) e inicia residencia."
                />
                <EstudiantesCard
                  title="B)"
                  description="Se presenta al menos cada mes con su asesor(a) interno(a) y con su apoyo desarrolla el proyecto de residencia."
                />
                <EstudiantesCard
                  title="C)"
                  description="Elabora informes parciales para facilitar su seguimiento por el(la) asesor(a)
                                        interno(a) y el desarrollo de su informe técnico. Requisita el formato
                                        ITD-AC-PO-007-05 para seguimiento de la residencia profesional."
                />
              </div>
            </Tab>
            <Tab eventKey="seventh" title="7. Final">
              <h4 className="semi-bold">
                7. Entrega el reporte final de residencia:
              </h4>
              <p>
                El alumno residente entrega al departamento académico
                correspondiente, los documentos que a continuación se detallan:
              </p>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Informe técnico de Residencia Profesional (Reporte Final)."
                />
                <EstudiantesCard
                  title="B)"
                  description="Formato de evaluación de proyecto de residencia profesional (ITD-AC-PO-007-07)."
                />
                <EstudiantesCard
                  title="C)"
                  description="Carta de liberación por parte de la empresa."
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
});
