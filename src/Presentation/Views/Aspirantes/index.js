import React, { lazy } from "react";
const BecasAspirantesScreen = lazy(() => import("./BecasAspirantes/BecasAspirantes.Screen"));
const CarrerasScreen = lazy(() => import("./Carreras/Carreras.Screen"));
const FechasImportantesScreen = lazy(() =>
  import("./FechasImportantes/FechasImportantes.Screen")
);
const ProcesoDeAdmisionScreen = lazy(() =>
  import("./ProcesoAdmision/ProcesoAdmision.Screen")
);

const base = "/aspirantes";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/proceso-de-admision`,
    Component: ProcesoDeAdmisionScreen,
  },
  {
    path: `${base}/fechas-importantes`,
    Component: FechasImportantesScreen,
  },
  {
    path: `${base}/carreras`,
    Component: CarrerasScreen,
  },
  {
    path: `${base}/becas`,
    Component: BecasAspirantesScreen,
  },
];

export default routes;
