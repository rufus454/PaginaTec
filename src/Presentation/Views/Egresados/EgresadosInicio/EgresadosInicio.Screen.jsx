import React from "react";
import { Helmet } from "react-helmet";

import TecBanner from "@Components/General/TecBanner";
import HorizontalSpacer from "@Components/General/HorizontalSpacer";
import { generateTitle } from "@Utility/Layout.Helper";

export default function EgresadosInicioScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Egresados")}</title>
      </Helmet>

      <TecBanner text="Egresados" />

      <HorizontalSpacer>
        <h4 className="text-center mt-4">
          SISTEMA DE SEGUIMIENTO DE EGRESADOS
        </h4>
        <p>
          Obtener información confiable y pertinente sobre la ubicación y las
          actividades que desempeñan nuestros egresados en el ámbito laboral, el
          grado de satisfacción y el nivel de exigencia de los empleadores en el
          desempeño profesionales de nuestros egresados, lo que permitirá
          evaluar el impacto que tiene el ITD a través de sus egresados en los
          sectores privado, público y social y de igual manera retroalimentar la
          toma de decisiones y actualización constante en los planes de estudio.
        </p>
        <h4 className="text-center mt-4">
          PROCEDIMIENTOS A SEGUIR PARA EL PROGRAMA DE ENCUESTAS DE EGRESADOS
        </h4>
        <HorizontalSpacer>
          <ol className="tex-center">
            <li>
              Entra al siguiente enlace:{" "}
              <a href="https://sse.delicias.tecnm.mx/" target="_blank">
                Sistema de seguimiento de Egresados
              </a>
            </li>
            <li>
              Selecciona "Registro Egresado" en la parte superior del sitio.
            </li>
            <li>Llena los datos solicitados.</li>
            <li>
              Al final seleccionar "Registrar", después serás redireccionado al
              tablero principal.
            </li>
            <li>
              Al entrar le aparecerán las encuestas a llenar:
              <br />
              a) Perfil del egresado. <br />
              b) Pertinencia y disponibilidad de medio y recursos para el
              aprendizaje. <br />
              c) Ubicación laboral de los egresados. <br /> d) Desempeño
              profesional de los egresados. <br />
              e) Expéctativas de desarrollo, superación profesional y de
              actualización. <br />
              f) Participación social de los egresados. <br />
              g) Comentarios y sugerencias.
            </li>
            <li>
              Se solicita llenar las encuestas que le corresponden según su
              estatus de egresado: <br />
              a)Si eres recién egresado, sólo contesta la encuesta de 1) Perfil
              del egresado. Te solicitamos llenar el resto de las encuestas
              cuando cumplas un año de egresado ¡PARA EL ITD, ES IMPORTANTE
              SEGUIR EN CONTACTO CON SUS EGRESADOS! <br />
              b)Si egresaste hace más de un año, te solicitamos contestar todas
              las encuestas, o actualizar los datos si ya lo habías hecho.
            </li>
          </ol>
        </HorizontalSpacer>
      </HorizontalSpacer>
    </div>
  );
}
