import React, { lazy } from "react";

const DetalleNoticia = lazy(() =>
  import("./DetalleNoticia/DetalleNoticia.Screen")
);

const ListadoNoticias = lazy(() =>
  import("./ListadoNoticias/ListadoNoticias.Screen")
);

const base = "/noticias";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/:id`,
    Component: DetalleNoticia,
  },
  {
    path: `${base}/lista`,
    Component: ListadoNoticias,
  },
];

export default routes;
