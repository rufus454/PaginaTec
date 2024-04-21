import React from "react";
import { Helmet } from "react-helmet";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { withSwal } from "react-sweetalert2";

import PlusCard from "@Components/Card/PlusCard";
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
      html: `<p style="text-align:justify;">Plantilla Registro Proyecto Titulación <a href="/doc/Estudiantes/Titulacion/PlantillaRegistroProyectoTitulacion[3590].doc"rel="noopener noreferrer"> ${downloadIcon}</a></p><p style="text-align:justify;">Plantilla Solicitud Titulación <a href="/doc/Estudiantes/Titulacion/PlantillaSolicitudTitulacion[3591].doc"rel="noopener noreferrer"> ${downloadIcon}</a></p>`,
    });
  }

  const handleClickInfoIdentifica = () => {
    swal.fire({
      show: true,
      title: "<strong>Nota:</strong>",
      icon: "info",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Me sirve la información!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      html: `Según la opción que elija, se solicitan diferentes requisitos, para mayor información comuníquese al correo: titulaciones@delicias.tecnm.mx
Indispensable requisito de inglés, mayor información al correo: vinculaciontecnologico@delicias.tecnm.mx`,
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
      html: `Hombres: con saco y corbata, puede ser con barba y bigote siempre y cuando quede libre la comisura del labio.
      <br />
Mujeres: con traje sastre o cuello sport, no camisetas.`,
    });
  };

  const handleClickInfoEntregar = () => {
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
        <title>{generateTitle("Titulación Integral")}</title>
      </Helmet>

      <StudentsBanner url="/image/estudiantes/titulacion.jpg">
        <div className="w-75">
          <h1 className="pt-md-5 pt-3 text-center">Titulación Integral</h1>
          <h4 className="text-left">El Instituto Tecnológico de Delicias</h4>
          <p className="text-left">
            Te da la más cordial de las felicitaciones, por haber concluido con
            éxito tus estudios en nuestro instituto, y titularte es un
            reconocimiento a tu esfuerzo, estudio y dedicación.
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
            <Tab eventKey="first" title="1. Identifica">
              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <PlusCard
                  // image={"/image/estudiantes/estudios.jpg"}
                  title={"Para números de control 2003 o anteriores"}
                  description={""}
                  content={`<h2>Números de control 2003 o anteriores</h2>
                                        <p>a) Tesis Profesional.</p>
                                        <p>b) Elaboración de textos, prototipos o instructivos para prácticas.</p>
                                        <p>c) Proyectos de Investigación.</p>
                                        <p>d) Diseño o Rediseño de equipo, aparato o maquinaria.</p>
                                        <p>e) Cursos especiales de titulación.</p>
                                        <p>f) Examen por áreas de conocimiento.</p>
                                        <p>g) Memoria de experiencia profesional.</p>
                                        <p>h) Por promedio.</p>
                                        <p>i) Por estudios de maestría.</p>
                                        <p>j) Memoria de Residencia.</p>
                                        <p>k) Examen de egreso CENEVAL (EGEL).</p>
                                        <br />
                                        <br />`}
                />
                <PlusCard
                  // image={"/image/estudiantes/estudios.jpg"}
                  title={"Para números de control 2004 hasta 2009"}
                  description={""}
                  content={`<h2>Números de control 2004 hasta 2009</h2>
                                        <p>a) Tesis Profesional.</p>
                                        <p>b) Proyectos de Investigación.</p>
                                        <p>c) Examen por áreas de conocimiento.</p>
                                        <p>d) Por promedio.</p>
                                        <p>e) Memoria de Residencia.</p>
                                        <p>f) Examen de egreso CENEVAL (EGEL).</p>
                                        <br />
                                        <br />`}
                />
                <PlusCard
                  // image={"/image/estudiantes/estudios.jpg"}
                  title={"Para números de control 2010 en delante"}
                  description={""}
                  content={`<h2>Números de control 2010 en delante</h2>
                                        <p>Proceso de inicio del Trámite de Titulación Integral.
                                           <a href="/doc/Estudiantes/Titulacion/DocumentoProcesoTitulacionIntegral.pdf"> Descargar</a></p>
                                        <p>a) Residencia Profesional.</p>
                                        <p>b) Proyecto de Investigación y/o Desarrollo Tecnológico.</p>
                                        <p>c) Proyecto Integrador.</p>
                                        <p>d) Proyecto Productivo.</p>
                                        <p>e) Proyecto de Innovación Tecnológica.</p>
                                        <p>f) Proyecto de Emprendedurismo.</p>
                                        <p>g) Proyecto Integral de Educación Dual.</p>
                                        <p>h) Estancia.</p>
                                        <p>i) Tesis o Tesina.</p>
                                        <br />
                                        <br />`}
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <button
                  className="btn bg-tec text-white border-white mb-4"
                  onClick={handleClickInfoIdentifica}
                >
                  Más información
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
                Debe enviar vía correo electrónico institucional al{" "}
                <a href="mailto:titulaciones@delicias.tecnm.mx">
                  titulaciones@delicias.tecnm.mx
                </a>
                en formato PDF la siguiente documentación al departamento de
                División de estudios profesionales.
              </h5>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Formato de registro del proyecto."
                />
                <EstudiantesCard
                  title="B)"
                  description="Solicitud del estudiante para titulación integral (ITD-AC-PO-003-01)."
                />
                <EstudiantesCard
                  title="C)"
                  description="Informe técnico de residencia profesional (Reporte final) o tesis u otro."
                />
                <EstudiantesCard
                  title="D)"
                  description="Carta de la empresa de autorización de derechos de titulación."
                />
                <EstudiantesCard
                  title="E)"
                  description="Portada de titulación."
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
            <Tab eventKey="third" title="3. Entregar">
              <h4 className="semi-bold">
                3. Entregar los siguientes requisitos en el Departamento de
                Servicios Escolares::
              </h4>
              <p>
                El Departamento de División de Estudios Profesionales, notifica
                por el correo electrónico la asignación de asesor,
                posteriormente a esto, pasara al departamento para la entrega
                del oficio de dicha asignación.
              </p>

              <div className="row mt-3 gap-5 d-flex justify-content-center">
                <EstudiantesCard
                  title="A)"
                  description="Tramite de Firma Electrónica en Hacienda."
                />
                <EstudiantesCard
                  title="B)"
                  description="Acta de nacimiento en formato reciente."
                />
                <EstudiantesCard
                  title="C)"
                  description="Certificado de bachillerato."
                />
                <EstudiantesCard
                  title="D)"
                  description="Copia legible del CURP."
                />
                <EstudiantesCard
                  title="E)"
                  description="6 Fotografías tamaño credencial ovaladas, de frente en blanco."
                />
                <EstudiantesCard
                  title="F)"
                  description="Realizar pago de tramites de titulación integral en la caja del Instituto."
                />
                <EstudiantesCard
                  title="G)"
                  description="Solicitar firmas de no adeudo en los diferentes departamentos de la Institución."
                />
              </div>

              <div className="mt-5 d-flex justify-content-center">
                <button
                  className="btn bg-tec text-white border-white mb-4"
                  onClick={handleClickInfoEntregar}
                >
                  Más información
                </button>
              </div>
            </Tab>
            <Tab eventKey="fourth" title="4. Notificación">
              <h4 className="semi-bold">
                4. Notificación de la fecha, hora y lugar del acto protocolario
                de Titulación:
              </h4>
              <p>
                El alumno solicitante deberá de estar atento a su correo
                electrónico ya que recibirá notificación del status de su
                trámite.
              </p>
            </Tab>
            <Tab eventKey="fifth" title="5. Recibe">
              <h4 className="semi-bold">
                5. Recibe Título y Cédula Profesional digital:
              </h4>

              <p>
                Una vez que se haya celebrado el Acto Protocolario de Titulación
                Integral el egresado recibe por parte del Instituto en Servicios
                Escolares su Título y Cédula profesional digital y mención
                honorifica cuando este aplique (al haber alcanzado un promedio
                general de 95 a 100 en su plan de estudios, cuando por su
                participación en eventos académicos nacionales o internacionales
                haya alcanzado alguno de los tres primeros lugares o cuando
                presente Testimonio de Desempeño Sobresaliente en el EGEL del
                CENEVAL).
                <br />
              </p>
              <p>Por último, el egresado firma el recibo en fotocopias.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
});
