const baseTemplate = (title, description, plusInfo) => {
  return `<h2>${title}</h2>
                <p>
                    <b>Descripción </b> <br>
                        ${description}
                </p>
                <p>
                    <b>Más información  </b> <br>
                        ${plusInfo}
                </p>
                <br />
                <br />`;
};

export const socialService = [
  {
    title:
      "Relación de alumnos que cumplen 70% de créditos aprobados en el semestre 1-2021",
    content: baseTemplate(
      "Alumnos que cumplen 70% de créditos aprobados en el semestre",

      "Relación de alumnos que cumplen 70% de créditos aprobados en el semestre 1-2021 que podrán cursar servicio social en el semestre 2-2021.",

      '<a href="/doc/Vinculacion/ServicioSocial/AlumnosSS.pdf">Descargar lista</a>'
    ),
  },
  {
    title: "Desarrollo Económico (20/06/2021) Encuestas",
    content: baseTemplate(
      "Desarrollo Económico",

      "Encuesta para reactivación económica post contingencia sanitaria.",
      "Comunicarse al correo: <br> gestiontec@delicias.tecnm.mx"
    ),
  },
];
