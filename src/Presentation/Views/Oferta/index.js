import React, { lazy } from "react";

const CarreraScreen = lazy(() => import("./Carrera/Carrera.Screen"));

const base = "/oferta";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/:id`,
    Component: CarreraScreen,
  },
];

export default routes;
