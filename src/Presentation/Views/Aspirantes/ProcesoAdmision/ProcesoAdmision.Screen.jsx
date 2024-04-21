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

  return (
    <div>
      <Helmet>
        <title>{generateTitle("Proceso de Admisión")}</title>
      </Helmet>

      <StudentsBanner url="/image/estudiantes/procesoAdmision.jpg">
        <div className="w-75">
          <h1 className="pt-md-5 pt-3 text-center">Proceso de admisión</h1>
          <p className="text-left">
            Tecnológico Nacional de México Campus Delicias Todos los que
            conformamos está institución estamos contentos en tu interés de que
            formes parte en alguna de nuestras carreras para el Semestre Agosto
            - Diciembre 2024.
          </p>
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
            <Tab eventKey="first" title="1. Datos Personales">
              <div className="design-process-content">
                <h4 className="semi-bold">
                  <b>Paso 1: Registro de datos personales</b>
                </h4>
                <p>
                  Del 15 de febrero al 29 de junio del 2024.{" "}
                  <b>"Modalidad Escolarizada"</b>
                </p>
                <p>
                  Del 15 de febrero al 22 de junio del 2024.{" "}
                  <b>"Modalidad Mixta"</b>
                </p>
                <p>
                  Es importante que para registrarte estés en tu último semestre
                  del bachillerato o que hayas terminado los mismos. <br />
                  Para iniciar tu proceso de admisión, te pedimos realices el
                  registro de tus datos personales. <br />
                  Una vez capturados tus datos, se generará un documento con la
                  información de pago.
                  <br />
                </p>
                <div className="d-flex justify-content-center">
                  <a
                    href="http://sii.itdelicias.edu.mx/modulos/sol/aspirantes/nuevo_aspirante2.php"
                    style={{
                      backgroundColor: "#92b825",
                      marginBottom: "20px",
                    }}
                    className="btn btn-lg active text-light"
                    role="button"
                    aria-pressed="true"
                  >
                    Registro de datos
                  </a>
                </div>
                <p className="text-danger">
                  <b>
                    ¡Despues del registro Guarda el PDF que se genere pues
                    contiene la información necesaria para realizar el pago!
                    <b>"Pasar al segundo paso (Pago de Ficha)"</b>
                  </b>
                </p>
              </div>
            </Tab>
            <Tab eventKey="second" title="2. Pago de Ficha">
              <h4 className="semi-bold">
                <b>Paso 2: Pago de ficha</b>
              </h4>
              <div className="row">
                <div className="col-sm-16 col-lg-8">
                  <p>Puedes realizar tu pago en:</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Practicaja BBVA Bancomer</b>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b className="text-info">Depósito en Efectivo</b>
                  <table
                    style={{
                      marginLeft: "20px",
                      backgroundColor: "aliceblue",
                    }}
                    border="1"
                  >
                    <tr>
                      <td width="120px">
                        <b>Número de convenio</b>
                      </td>
                      <td width="420px">
                        <b>
                          001731211 (cero cero uno siete tres uno dos uno uno)
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Referencia</b>
                      </td>
                      <td>
                        <b>
                          235409990 (dos tres cinco cuatro cero nueve nueve
                          nueve cero)
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>En el Concepto poner</b>
                      </td>
                      <td>
                        <b>
                          Ingresar número de solicitud (los cinco dígitos que
                          aparecieron al finalizar el registro de tus datos
                          personales)
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <b>Revisar que el Beneficiario</b>
                      </td>
                      <td>
                        <b>TecNM Instituto Tecnológico de Delicias</b>
                      </td>
                    </tr>
                  </table>
                  <br />
                  <div>
                    &nbsp;
                    <b className="text-info">
                      Transferencia electrónica (SPEI)
                    </b>
                    <br />
                    <table
                      style={{
                        backgroundColor: "steelblue",
                        color: "white",
                        borderColor: "white",
                      }}
                      border="1"
                    >
                      <tr>
                        <td width="150px">
                          <b>Banco</b>
                        </td>
                        <td width="420px">
                          <b>BBVA</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Número de cuenta</b>
                        </td>
                        <td>
                          <b>
                            0113571645 (cero uno uno tres cinco siete uno seis
                            cuatro cinco)
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Número de cuenta clabe</b>
                        </td>
                        <td>
                          <b>
                            012150001135716452 (cero uno dos uno cinco cero cero
                            cero uno uno tres cinco siete uno seis cuatro cinco
                            dos)
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>En el Concepto poner</b>
                        </td>
                        <td>
                          <b>
                            Ingresar número de solicitud (los cinco dígitos que
                            aparecieron al finalizar el registro de tus datos
                            personales)
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Revisar que en el Beneficiario sea</b>
                        </td>
                        <td>
                          <b>TecNM Instituto Tecnológico de Delicias</b>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Una vez transcurridas 48 horas desde tu pago,
                <u>
                  <b
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "5px",
                    }}
                  >
                    {" "}
                    ingresa al tercer paso(Generación de NIP y resolución de
                    encuesta socioeconómica).
                  </b>
                </u>
              </p>
              <p>
                <b className="text-danger">Importante</b>
                Conserva tu ficha de pago para cualquier aclaración. El costo de
                la ficha para Examen de Admisión es de $750.00. El pago de la
                ficha no es reembolsable.
              </p>
            </Tab>
            <Tab eventKey="third" title="3. Generar Nip">
              <h4 className="semi-bold">
                Paso 3: Generación de NIP y resolución de encuesta
                socioeconómica
              </h4>
              <div
                className="row"
                style={{
                  marginLeft: "50px",
                }}
              >
                <p>
                  <b>A.</b>Una vez transcurridas 48 horas desde tu pago, ingresa
                  al siguiente link <br />
                  para generar el NIP que necesitarás para continuar tu proceso.
                  <br />
                </p>
                <a
                  href="http://sii.itdelicias.edu.mx/modulos/sol/aspirantes/mi_nip.php"
                  style={{
                    backgroundColor: "#92b825",
                    marginBottom: "20px",
                    marginLeft: "50px",
                  }}
                  className="btn btn-lg active text-light"
                >
                  Generar NIP
                </a>
                Nota: no olvides tu NIP, de lo contrario no podrás continuar con
                tu proceso de admisión.
                <p>
                  <b>B.</b> Despues de generar tu nip, ingresa al siguiente
                  enlace para registrar tus datos socioeconomicos. <br />
                  <a
                    href="http://sii.itdelicias.edu.mx/"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  >
                    http://sii.itdelicias.edu.mx/
                  </a>
                  en la sección de <b>ASPIRANTES</b> ingresa lo que se te pide.
                </p>
                <a
                  href="http://sii.itdelicias.edu.mx/"
                  style={{
                    backgroundColor: "#038A42",
                    marginBottom: "50px",
                    marginLeft: "50px",
                  }}
                  className="btn btn-lg active text-light"
                >
                  Registrar Datos Socioeconómicos
                  <br />
                  http://sii.itdelicias.edu.mx/
                </a>
              </div>
            </Tab>
            <Tab eventKey="third" title="4. Fecha y enlace">
              <h4 className="semi-bold">Paso 4: Fecha y Enlace de Examen</h4>
              <div
                className="row"
                style={{
                  marginLeft: "50px",
                }}
              >
                <p>
                  <b>A)</b> Modalidad Mixta (examen en línea):{" "}
                  <b className="text-success">
                    {" "}
                    22 de Junio del 2024. Hora:09:00am
                  </b>
                  <br />
                  <b>B)</b> Modalidad Escolarizada (examen en línea):{" "}
                  <b className="text-info">
                    {" "}
                    29 de junio del 2024. Hora: 09:00am
                  </b>
                  Nota: El examen iniciara a las 09:00am, en las instalaciones
                  del Instituto Tecnológico de Delicias.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href="/doc/Aspirantes/GuiaCOSNET.pdf"
                  style={{
                    backgroundColor: "blue",
                    marginBottom: "20px",
                  }}
                  className="btn btn-lg active text-light"
                  target="_blank"
                >
                  Descargar Guía examen de admisión
                </a>
              </div>

              <h4 className="semi-bold text-black">
                <b>Resultados</b>
              </h4>
              <div
                className="row"
                style={{
                  marginLeft: "50px",
                  color: "black",
                }}
              >
                <p>
                  Para información relacionada con el examen de admisión, los
                  resultados y las inscripciones, revisa constantemente la
                  página web y las redes sociales oficiales del TecNM Campus
                  Delicias:
                  <br />
                  Página web:
                  <a href="https://www.delicias.tecnm.mx/">
                    https://www.delicias.tecnm.mx/
                  </a>
                  <br />
                  Facebook:{" "}
                  <a href="https://www.facebook.com/tecnologico.delicias">
                    https://www.facebook.com/tecnologico.delicias
                  </a>
                  <br />
                  Instagram:{" "}
                  <a href="https://www.instagram.com/tecnologico.delicias/">
                    https://www.instagram.com/tecnologico.delicias/
                  </a>
                  <br />
                  Tiktok:{" "}
                  <a href="https://www.tiktok.com/tecnmcampusdelicias">
                    https://www.tiktok.com/tecnmcampusdelicias
                  </a>
                  <br />
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
});
