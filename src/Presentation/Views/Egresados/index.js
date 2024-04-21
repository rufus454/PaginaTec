import React, { lazy } from "react";
const EgresadosInicioScreen = lazy(() => import("./EgresadosInicio/EgresadosInicio.Screen"));

const base = "/egresados";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}`,
    Component: EgresadosInicioScreen,
  },
];

export default routes;
