import React, { lazy } from "react";
const InicioScreen = lazy(() => import("./Inicio/Inicio.Screen"));

const base = "/";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}`,
    Component: InicioScreen,
  },
];

export default routes;
