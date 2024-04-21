import industrialDistanciaData from "./distancia/industrial-distancia.json";
import sistemasDistanciaData from "./distancia/sistemas-distancia.json";
import gestionDistanciaData from "./distancia/gestion-distancia.json";
import industrialData from "./escolarizado/industrial.json";
import electroData from "./escolarizado/electro.json";
import sistemasData from "./escolarizado/sistemas.json";
import gestionData from "./escolarizado/gestion.json";
import renovablesData from "./escolarizado/renovables.json";
import civilData from "./escolarizado/civil.json";

/**
 * @type {import('@Entity/Oferta/Carrera.Entity').Carrera[]}
 */
export const careers = [
  industrialDistanciaData,
  sistemasDistanciaData,
  gestionDistanciaData,
  industrialData,
  electroData,
  sistemasData,
  gestionData,
  renovablesData,
  civilData,
];
