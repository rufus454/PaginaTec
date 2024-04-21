import React, { lazy } from "react";

const DirectorioScreen = lazy(() => import("./Directorio/Directorio.Screen"));
const LogotiposScreen = lazy(() => import("./Logotipos/Logotipos.Screen"));
const MensajeScreen = lazy(() => import("./Mensaje/Mensaje.Screen"));
const MisionScreen = lazy(() => import("./Mision/Mision.Screen"));
const ModeloEducativoScreen = lazy(() => import("./ModeloEducativo/ModeloEducativo.Screen"));
const OrganigramaScreen = lazy(() => import("./Organigrama/Organigrama.Screen"));
const ServiciosScreen = lazy(() => import("./Servicios/Servicios.Screen"));
const PlanoScreen = lazy(() => import("./Plano/Plano.Screen"));
const ResenaScreen = lazy(() => import("./Resena/Resena.Screen"));

const base = "/institucion";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/mensaje-de-la-directora`,
    Component: MensajeScreen,
  },
  {
    path: `${base}/resena-historica`,
    Component: ResenaScreen,
  },
  {
    path: `${base}/mision-vision-valores`,
    Component: MisionScreen,
  },
  {
    path: `${base}/logotipos`,
    Component: LogotiposScreen,
  },
  {
    path: `${base}/servicios`,
    Component: ServiciosScreen,
  },
  {
    path: `${base}/plano-del-instituto`,
    Component: PlanoScreen,
  },
  {
    path: `${base}/modelo-educativo`,
    Component: ModeloEducativoScreen,
  },
  {
    path: `${base}/organigrama`,
    Component: OrganigramaScreen,
  },
  {
    path: `${base}/directorio`,
    Component: DirectorioScreen,
  },
];

export default routes;
