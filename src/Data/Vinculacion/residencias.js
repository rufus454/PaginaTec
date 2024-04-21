/**
 * Template base para las residencias.
 * @param {string} title Título de la residencia.
 * @param {string} secondTitle Segundo título de la residencia.
 * @param {string} description Descripción de la residencia.
 * @param {string} plusInfo Información adicional de la residencia.
 */
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

export const vacancy = [
  {
    title: "Cirpro de Delicias S.A ( de Cardinal Health) (16-11-2023)",
    description:
      "Análisis de Capacidad de Procesos para mejorar la Eficiencia.",
    content: baseTemplate(
      "Es requerido un análisis de capacidad de procesos para obtener un mapa actual de los cuellos de botella de los diferentes proceso de la planta.",
      "Ing. Industrial o carrera a fin",
      "Beca Económica, alimentación.",
      `Interesados mandar su curriculum a: <br />Sara Villalobos<br /> Email Sara.villalobos@cardinalhealth.com<br />`
    ),
  },
  {
    title: "Syseti (19/04/2023)",
    description: "Empresa lider en desarrollo de software.",
    content: baseTemplate(
      "Empresa lider en desarrollo, solicita cinco Ing. en Sistemas Computacionales para el área de desarrollo.",
      "(5) Ing. en Sistemas Computacionales o carrera a fin",
      "Beca económica",
      `Interesados mandar su curriculum a: <br />Margarita Ramos<br /> Email sramos@quanto.mx<br />`
    ),
  },
  {
    title: "Financiera los Alamos S.A. de C.V. (19/04/2023)",
    description: "Auxiliar de Sistemas",
    content: baseTemplate(
      "Programación, Mantenimiento Software y Hardware, conocimiento en redes inalámbricas.",
      "Ing. Sistemas o carrera a fin con los conocimientos.",
      "Beca económica",
      "Interesados mandar su curriculum a: <br />Fernanda López V.<br /> Email fernanda.lopezv13@gmail.com<br />"
    ),
  },
  {
    title: "Quanto (19/04/2023)",
    description: "Empresa lider en desarrollo de software.",
    content: baseTemplate(
      "Empresa lider en desarrollo, solicita dos Ing. en Gestión Empresarial, para el departamento Comercial.",
      "(2) Ing. en Gestión Empresarial o carrera a fin",
      "Beca económica",

      "Interesados mandar su curriculum a: <br />Margarita Ramos<br /> Email sramos@quanto.mx<br />"
    ),
  },

  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 14/03/2023",
    description:
      "Realización de una guía de solución de problemas para equipos automáticos en el área de 60T y crear un listado de refacciones crítica.",
    content: baseTemplate(
      "Crear un sistema de solución de problemas para guiar al operador y/o técnico de manufactura sobre cómo resolver un problema o falla en el equipo que se está operando con el fin de reducir los tiempos muertos, que el equipo opere con seguridad y la correcta operación del mismo para mejorar la productividad y calidad en los procesos de manufactura",
      "Ing. Industrial",
      "Beca económica",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 14/03/2023",
    description: "Reducción de scrap.",
    content: baseTemplate(
      "Mejorar el control estadístico de scrap.",
      "Ing. en Energías Renovables, Ing. Industrial",
      "Beca económic",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 14/03/2023",
    description: "Inventario activo fijo y organización de archivo",
    content: baseTemplate(
      "Identificar variaciones entre activo fijo existente en fisico contra registro en libros",
      "Ing. Gestión Empresarial o afin",
      "Beca económica/ 2 Vacantes",
      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title: "Autotransportes Rodríguez Mier SA de CV (21/02/2023)",
    description: "Evaluación de flujos de proceso",
    content: baseTemplate(
      "Identificar tiempos muertos y movimientos inecesarios en el proceso.",
      "Ing. Industrial",

      "Se apoyará con el costo del transporte semanal y un incentivo económico.",

      "Interesados mandar su curriculum a: <br />Carlos Rodríguez<br /> Email carlos.rodriguez@atromi.com<br />"
    ),
  },
  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 21/02/2023",
    description:
      "Realización de una guía de solución de problemas para equipos automáticos en el área de 60T y crear un listado de refacciones críticas.",
    content: baseTemplate(
      "Crear un sistema de solución de problemas para guiar al operador y/o técnico de manufactura sobre cómo resolver un problema o falla en el equipo que se está operando con el fin de reducir los tiempos muertos, para que el equipo opere con seguridad y la correcta operación del mismo para mejorar la productividad y calidad en los procesos de manufactura.",
      "Ing. Industrial",
      "Beca económica.",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 21/02/2023",
    description: "Reducción de scrap",
    content: baseTemplate(
      "Mejorar el control estadistico de scrap.",
      "Ing. en Energías Renovables o Ing. Industrial",
      "Beca económica.",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title:
      "Componentes Avanzados de México SA de CV (Therm-O-Disc Delicias) 17/02/2023",
    description:
      "Censo de software y equipos de cómputo en linea de producción",
    content: baseTemplate(
      "Crear y mantener actualizado un censo de software y equipos en líneas de producción con el fin de identificar características de cada uno de ellos para contar con un respaldo espejo y responder a la brevedad.",
      "Ingeniero en Sistemas Computacionales.",
      "Beca económica.",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> Email nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title: "CBTa No 2(17/01/2023)",
    description:
      "Sistema de ventas de productos elaborados en el CBTa 2 / Sistema de inventarios ",
    content: baseTemplate(
      "Desarrollo de aplicación para la institución con la finalidad de optimizar un mejor control en los procesos de productos que generar para la venta.",
      "Ingeniero en Sistemas Computacionales.",

      "Al finalizar su residenica se les entregara una dotación de productos que se elaboran en el CBTa no 2.",

      "Interesados mandar su curriculum a: <br />M.C. Juán Alberto Torres Guzmán<br /> Email frania.torres@cbta2.delicas.edu.mx<br />"
    ),
  },
  {
    title: "INGENIO COMPUTACIONAL DE DELICIAS SA DE CV (17/01/2023)",
    description: "Mantenimiento en el área de sistemas y soporte.",
    content: baseTemplate(
      "Brindar las mejores soluciones en telecomunicaciones y sistemas de cómputo para que nuestros clientes resuelvan sus necesidades",
      "Ingeniero en Sistemas Computacionales.",
      "Beca economica",

      "Interesados mandar su curriculum a: <br />Lic. Jessica Valles <br /> reclutamiento@ingenio.com.mx<br />"
    ),
  },
  {
    title: "SEMAIN (12/01/2023)",
    description: "Programación CNC en el área de fresado.",
    content: baseTemplate(
      "Elevar las competencias en el área.",
      "Ingeniero Electromecánico o Ingeniero en Mecatrónica. ",
      "Beca economica",

      "Interesados mandar su curriculum a: <br />Lic. Graciela Vitolás Carnero<br /> coordinacionrh@semain.com.mx<br />"
    ),
  },
  {
    title: "SEMAIN (12/01/2023)",
    description: "Programación CNC en el área de tornado.",
    content: baseTemplate(
      "Elevar las competencias en el área.",
      "Ingeniero Electromecánico o Ingeniero en Mecatrónica. ",
      "Beca economica",

      "Interesados mandar su curriculum a: <br />Lic. Graciela Vitolás Carnero<br /> coordinacionrh@semain.com.mx<br />"
    ),
  },
  {
    title: "Ideatek Tutor de Idiomas (12/01/2023)",
    description: "Pruebas de software / mantenimiento App",
    content: baseTemplate(
      "Pruebas de software y mantenimiento de la aplicación.",

      "Ingeniero en Sistemas Computacionales con conocimientos en Java",
      "Beca $5,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Homero Díaz<br /> homerodu@hotmail.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (12/01/2023)",
    description: "Cambio de Lay-out área de estampado",
    content: baseTemplate(
      "Cambios en los sistemas de gestión empresarial y administración de los cambios de lay-out en área de esampado.",
      "Ingeniería Industrial/Ingeniería en Gestión Empresarial",

      "Beca $4,000.00 mensuales, entrega de playera y zapatos de seguridad(EPP), servicio de comedor",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (12/01/2023)",
    description:
      "Determinación de oportunidades de Ahorro para componentes de nuevos proyectos y existentes, heramienta y Mro.",
    content: baseTemplate(
      "Buscar oportunidades de ahorro y dar seguimiento con los proveedores para formalizar ahorros.",
      "Ingeniería Industrial/Ingeniería en Gestión Empresarial",

      "Beca $4,000.00 mensuales, entrega de playera y zapatos de seguridad(EPP), servicio de comedor",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "SEMAIN (Diseño Soluciones) (08/12/2022)",
    description:
      "Uso de herramientas de SolidWorks para la optimización del diseño de patrones para mangueras Automotrices.",
    content: baseTemplate(
      "Es imperativo contar con modelos de las rutas de los herramentales que se diseñan para la fabricación de mangueras automotrices para garantizar la trayectoria mediante medición por escaneo o palpado, por lo que se requiere optimizar los tiempos de diseño en la generación de las rutas.",
      "Ingeniería  Electromecánica  / Ingeniería  Industrial",
      "Beca económica.",

      "Interesados mandar su curriculum a: <br />Lic. Graciela Vitolás Carnero<br /> coordinacionrh@semain.com.mx<br />"
    ),
  },

  {
    title: "Tristone Flowtech Mexico (05/12/2022)",
    description:
      "ArranqueOptimizacion en el suministro de BIPS a lineas de produccion de planta DELX en el área de Extrusión y Vulcanizado",
    content: baseTemplate(
      "Estudio de tiempos y movimientos del personal de almacén y suministro de BIPS a líneas de producción, optimización de rutas y métodos de trabajo. ",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description:
      "Arranque de planta DELX en el área de Extrusión y Vulcanizado",
    content: baseTemplate(
      "Mejorar el desempeño de equipos a través de la efectividad del programa de mantenimiento preventivo.",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description: "Productividad en el área de Estampado",
    content: baseTemplate(
      "Productividad en el área de Estampado",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description:
      "Seguimiento a la implementación de actividades relacionadas a reducción de costos VA/VE",
    content: baseTemplate(
      "Dar seguimiento a actividades iniciadas de mejora en productos y buscar nuevas posibilidades de mejoras en productos similares o nuevas oportunidades de mejoras y ahorros.",
      "Ingeniería Industrial o Ingeniería en Gestión Empresarial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description:
      "Coordinar la disposición de herramentales obsoletos (FORD, BMW, GM,VW, FCA)",
    content: baseTemplate(
      "Inventario excesivo de herramentales obsoletos en área de tooling.",
      "Ingeniería Electromecánica",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description: "Generar catálogo de muescas en mandriles.",
    content: baseTemplate(
      "Resolver el descontrol en los mandriles que llevan muesca (posición, razón de la muesca, fechas de implementación).",
      "Ingeniería Electromecánica",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },

  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description: "Optimización y soporte en área de empaques y embarques BMW.",
    content: baseTemplate(
      "Controlar el uso de empaques alternativos en líneas de producción y embarques",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },
  {
    title: "Tristone Flowtech Mexico (02/12/2022)",
    description:
      "Mejora en el indicador de productividad del área de ensamble final.",
    content: baseTemplate(
      "Debido a que no se ha cumplido con el objetivo de productividad en el área de ensamble final durante los últimos meses, se requiere de un análisis a fondo para determinar cuáles son los principales factores que afectan a este indicador, así como el desarrollo de actividades que contribuyan a alcanzar el objetivo establecido a corto plazo.",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Griselda Teresa Piñón Trejo<br /> griselda.pinon@tristone.com<br />"
    ),
  },

  {
    title: "San Antonio Manufacturing (02/12/2022)",
    description: "Proceso de Manufactura crate 90-002036-01",
    content: baseTemplate(
      "Arranque de proceso en Crate Modelo 90-002036-01",
      "Ingeniería Industrial",
      "Beca $4,000.00 mensuales",

      "Interesados mandar su curriculum a: <br />Marthe Alejandro Rojas Atilano<br /> Marthe.rojas@hotmail.com<br />"
    ),
  },

  {
    title: "Syseti (28/11/2022)",
    description: "Mejoras en desarrollo software financiero",
    content: baseTemplate(
      "Mejoras en desarrollo software financiero",
      "Ingeniería en Sistemas Computacionales",
      "",

      "Interesados mandar su curriculum a: <br />halia Gonzalez<br /> talento@quanto.mx<br />"
    ),
  },
  {
    title: "Componentes Avanzados de México (Therm-O-Disc) (28/11/2022)",
    description:
      "Censo de software y equipos de cómputo en línea de producción",
    content: baseTemplate(
      "Crear y mantener actualizado un censo de software y equipos en líneas de producción con el fin de identificar características de cada uno de ellos para contar con un respaldo espejo y responder a la brevedad ",
      "Ingeniería en Sistemas Computacionales",
      "",

      "Interesados mandar su curriculum a: <br />Nieves Aurora Carrillo Maloof<br /> nieves.carrillo@emerson.com<br />"
    ),
  },
  {
    title: "ADC de Delicias (COMMSCOPE) (07/11/2022)",
    description:
      "Actualizacion de expedientes de nomina Banamex en ADC de Delicias",
    content: baseTemplate(
      "Departamemnto de Finanzas",
      "Ingeniería en Gestion Empresarial",
      "",

      "Interesados mandar su curriculum a: <br />Alvaro Nuñez<br /> alvaro.nunez@commscope.com<br />"
    ),
  },
  {
    title: "THINCRS INC MÉXICO, S. DE R.L. DE C.V (07/11/2022)",
    description:
      "Realización de proyectos a través de Residencias Profesionales para la capacitación y vinculación con el empleo",
    content: baseTemplate(
      "Capacitar a los estudiantes a egresar para apoyarlos en el proceso de especialización de sus competencias profesionales",
      "Ingeniería en Sistemas Computacionales",
      "",

      "Interesados mandar su curriculum a: <br />Arasy García Gordian<br /> arasy@thincrs.com<br />"
    ),
  },
  {
    title: "SERVICIOS MEP ABITAT SA (03/11/2022)",
    description: "Estandarización de Calidad y Reportes Semanales",
    content: baseTemplate(
      "Cumplir con los compromisos pactados con departamento de calidad y compromisos semanales",

      "Ing. Electromecánica (preferentemente) o Ing. Energías Renovables",
      "6000 pesos beca mensual",

      "Interesados mandar su curriculum a: <br />Idania Morales Tena<br /> amorales@abitat.com.mx<br />"
    ),
  },
  {
    title: "UPN (12/09/2022)",
    description: "Mantenimiento de sistemas computacionales y redes eléctricas",
    content: baseTemplate(
      "En el Campus Delicias de la UPNECH no se cuenta con personal especializado para el cuidado y mantenimientos preventivos de las instalaciones computacionales y las redes eléctricas. Por lo que, cuando alguna problemática relacionada ocurre, se debe recurrir a especialistas externos y depender de los horarios de atención, así como de la priorización que realicen a la solicitud emitida, lo que en ocasiones frena la debida atención al alumnado del Campus.",

      "Ing. EN Sistemas Computacionales(2) Ing. Electromecánico(2)",
      "Beca",

      "Interesados mandar su curriculum a: <br />Albertico Guevara Araiza<br /> aguevara@upnech.edu.mx<br />"
    ),
  },
  {
    title: "CBTa 2 (12/09/2022)",
    description: "Instalación de Red informática en Sala 1",
    content: baseTemplate(
      "Mejorar la instalación de la red informática de Sala 1. Diseñando la mejor opción, elaborando y ruteando cables de red.",
      "Ing. EN Sistemas Computacionales",
      "Beca",

      "Interesados mandar su curriculum a: <br />Lic. Claudia Verónica Gallegos Flores<br /> claudia.gallegos@cbta2delicias.edu.mx<br />"
    ),
  },
];
