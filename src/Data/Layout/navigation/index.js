import institucionData from "./institucion.json";
import ofertaData from "./oferta.json";
import personalData from "./personal.json";
import estudiantesData from "./estudiantes.json";
import aspirantesData from "./aspirantes.json";
import contactoData from "./contacto.json";
import vinculacionData from "./vinculacion.json";
import egresadosData from "./egresados.json";

/** @type {import('@Entity/Layout/NavLink.Entity').NavLink[]} */
export const navigationData = [
  institucionData,
  ofertaData,
  personalData,
  estudiantesData,
  aspirantesData,
  contactoData,
  vinculacionData,
  egresadosData,
];
