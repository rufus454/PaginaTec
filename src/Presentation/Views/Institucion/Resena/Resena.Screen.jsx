import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import styles from "./Resena.module.css";
import { generateTitle } from "@Utility/Layout.Helper";

export default function ResenaScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Reseña Histórica")}</title>
      </Helmet>
      <Container fluid className={styles.container}>
        <h4 className="text-center mb-4">
          Reseña Histórica del Instituto Tecnológico de Delicias
        </h4>
        <p>
          El Instituto Tecnológico de Delicias nació a raíz del entusiasmo,
          inquietud y optimismo de un grupo de delicienses que iniciaron las
          gestiones necesarias para su creación, integrándose un patronato pro
          construcción que insistió afanosamente hasta lograr su edificación.
        </p>
        <p>
          Por el año de 1986 y siendo Diputado Federal el C. Lic. Fernando Baeza
          Meléndez y después Gobernador del Estado, consiguió la anhelada
          autorización, apoyado por un convenio entre el Gobierno del Estado,
          Patronato y Federación.
        </p>
        <p>
          Siendo Gobernador Constitucional del Estado el Lic. Saúl González
          Herrera y Director General de Tecnológicos el Ing. Leonardo Sánchez
          Cuellar, se firmó el convenio constitutivo entre ambos para la
          creación del Tecnológico de Delicias con fecha 6 de junio de 1986. Con
          este nuevo centro de educación Superior, el Estado de Chihuahua
          contaba con el cuarto Tecnológico en la entidad. El Gobernador
          mencionó que significaría el surgimiento de nuevos profesionistas,
          mismos que contribuirían al desarrollo no solo de la región Centro Sur
          del Estado, sino que los conocimientos adquiridos en las aulas serían
          de beneficio para todo México.
        </p>
        <p>
          El Tecnológico de Delicias ofrece actualmente las siguientes carreras
          profesionales, mismas que se especifican conforme se fueron creando:
          Ingeniería Industrial, Ingeniería Electromecánica, Ingeniería en
          Sistemas Computacionales, Ingeniería en Gestión Empresarial e
          Ingeniería en Energías Renovables, ⟨de las cuales Ingeniería
          Industrial e Ingeniería Electromecánica están acreditadas por su buena
          calidad por Los Comités Interinstitucionales para la Evaluación de la
          Educación Superior (CIEES).
        </p>
        <p>
          Actualmente ofrece servicio educativo de calidad a 1568 alumnos en sus
          cinco diferentes carreras. Los estudiantes son atendidos por 98
          docentes calificados, que se esfuerzan por ofrecer los métodos de
          enseñanza más avanzados, en instalaciones adecuadas para el estudio,
          la cultura y el deporte, con acceso a la tecnología computacional.
        </p>
        <p>
          El plantel cuenta con la Certificación de su proceso educativo bajo un
          sistema integrado de gestión que abarca la Norma ISO 9001:2015, ISO
          14001:2015, ISO 45001:2018 e ISO 50001:2018 lo que representa el
          esfuerzo de todos y cada uno de los trabajadores y la intención de
          trabajar en la mejora continua de la calidad en busca de lograr la
          excelencia académica.
        </p>
        <p>El Instituto Tecnológico de Delicias refrenda su compromiso de:</p>
        <p className="fw-bold">"Sembrar valores para cosechar lideres"</p>
      </Container>
    </div>
  );
}
