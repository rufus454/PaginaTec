import React, { lazy } from "react";
const ComiteScreen = lazy(() => import("./Comite/Comite.Screen"));
const ConsejoScreen = lazy(() => import("./Consejo/Consejo.Screen"));
const OfertasDeTrabajoScreen = lazy(() => import("./OfertasDeTrabajo/OfertasDeTrabajo.Screen"));
const VacantesResidenciaScreen = lazy(() =>
  import("./VacantesResidencia/VacantesResidencia.Screen")
);
const VacantesServicioSocialScreen = lazy(() =>
  import("./VacantesServicioSocial/VacantesServicioSocial.Screen")
);

const base = "/vinculacion";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/comite`,
    Component: ComiteScreen,
  },
  {
    path: `${base}/consejo`,
    Component: ConsejoScreen,
  },
  {
    path: `${base}/ofertas-de-trabajo`,
    Component: OfertasDeTrabajoScreen,
  },
  {
    path: `${base}/vacantes-residencia`,
    Component: VacantesResidenciaScreen,
  },
  {
    path: `${base}/vacantes-servicio-social`,
    Component: VacantesServicioSocialScreen,
  },
];

export default routes;
