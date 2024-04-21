const baseTemplate = (title, secondTitle, description, plusInfo) => {
  return `<h2>${title}</h2>
                <p>
                    <b>${secondTitle}</b> <br />
                    ${description}
                </p>
                <p>
                    <b>Más información</b> <br />
                    ${plusInfo}
                </p>
                <br />
                <br />`;
};

export const jobs = [
  {
    title: "Comisión Federal de Electricidad (20/02/2024)",
    description: "Ing. Electromecánica",
    content: baseTemplate(
      "Disciplina Mecánica",
      "Mayores informes al : 639-1190871",
      "Lugar: Cd. Juarez, Durango",
      "Interesados mandar su curriculum a: Manuel García Ronquillo<br /> Correo Electrónico: manuel.garcia09@hotmail.com"
    ),
  },
  {
    title: "INGENIO mobile store (27/01/2023)",
    description: "Ing. en Sistemas Computacionales",
    content: baseTemplate(
      "ASESOR DE SOPORTE",
      "INGENIO invita a formar parte de su equipo de trabajo, ",

      "Soporte en: Mantenimiento preventivo y correctivo a equipo de computo e impresoras<br/>Instalación de y configuración de componentes internos y externos<br/>Conocimiento e instalación de cableados<br/>Conocimiento en sistemas operativos y servidores<br/>licencia de Conducir vigente",

      "Interesados mandar su curriculum a: Reclutamiento INGENIO<br />  <br /> reclutamiento@ingenio.com.mx<br />"
    ),
  },
  {
    title: "TE Connectivity (25/01/2023) ID 6913",
    description: "Ing. Industrial o afín",
    content: baseTemplate(
      "Es una importante compañía líder mundial en tecnología industrial que crea un futuro más seguro, sostenible y conectado.",

      "Estudiantes a partir de 6to Semestre, Sueldo de 10,000+TDU+Seguro contra accidentes",
      "* Diseño Gráfico<br/>* Comunicación <br/>",

      "Interesados mandar su curriculum a: Becario de diseño y comunicación <br />  <br /> mbecerril1@probecario.com <br />"
    ),
  },
  {
    title: "San Antonio Tarimas & Embalajes (05/12/2022)",
    description: "Ingeniero Industrial.",
    content: baseTemplate(
      "Buscamos a un ingeniero industrial para el área de Ingeniería",
      "",
      "",

      "Interesados mandar su curriculum a: Marthe Alejandro Rojas Atilano <br />  <br /> sanantonio.tarimas.embalajes@live.com.mx <br />"
    ),
  },

  {
    title:
      "Seleccionadora de cebolla y cacahuate José Soto Cisnero (06/11/2022)",
    description: "Ingeniero Industrial.",
    content: baseTemplate(
      "Buscamos a un ingeniero de procesos que se responsabilice de diseñar, utilizar e implementar procesos. El candidato elegido podrá mejorar los procesos industriales para mantener la eficiencia, reducir costes, mejorar la sostenibilidad y maximizar el margen de beneficios.",
      "",
      "",

      "Interesados mandar su curriculum a: <br /> María de los Ángeles Soto Ornelas <br /> empaqueloscisneros@gmail.com <br />"
    ),
  },
  {
    title: "THINCRS INC MÉXICO, S. DE R.L. DE C.V (03/11/2022)",
    description: "Ingeniería en Sistemas Computacionales",
    content: baseTemplate(
      "Desarrollaor Back end: Java",
      "",
      "",

      "Interesados mandar su curriculum a: <br /> Arasy García Gordian  <br /> arasy@thincrs.com <br /> <br /> 3221093856 <br />"
    ),
  },
  {
    title: "8A STELL, S.A. DE C.V. (25/10/2022)",
    description: "Ing. Electromecánica",
    content: baseTemplate(
      "Operar maquinaria para soldar laminas y polines",
      "",
      "",

      "Interesados mandar su curriculum a: <br /> Valeria Aguirre  <br /> malla_norte@hotmail.com <br /> <br /> 639 472 66 66 <br />"
    ),
  },
  {
    title: "Amdocs (10/09/2022)",
    description: "Ing. En Sistemas Computacionales",
    content: baseTemplate(
      "Supervisor de producción y Supervisor mantenimiento",
      "software y proveedor de servicios",
      "",
      "https://auth.thincrs.com/talent-pool"
    ),
  },
];
