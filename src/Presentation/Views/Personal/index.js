import React, { lazy } from "react";
const TutoriasScreen = lazy(() => import("./Tutorias/Tutorias.Screen"));

const base = "/personal";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/tutorias`,
    Component: TutoriasScreen,
  },
];

export default routes;
