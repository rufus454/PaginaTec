import React, { lazy } from "react";
const AcreditacionInglesScreen = lazy(() =>
  import("./AcreditacionIngles/AcreditacionIngles.Screen")
);
const ActividadesComplementariasScreen = lazy(() =>
  import("./ActividadesComplementarias/ActividadesComplementarias.Screen")
);
const AportacionesScreen = lazy(() =>
  import("./Aportaciones/Aportaciones.Screen")
);
const BecasEstudiantesScreen = lazy(() =>
  import("./BecasEstudiantes/BecasEstudiantes.Screen")
);
const CambioDeCarreraScreen = lazy(() =>
  import("./CambioDeCarrera/CambioDeCarrera.Screen")
);
const MovilidadEstudiantilScreen = lazy(() =>
  import("./MovilidadEstudiantil/MovilidadEstudiantil.Screen")
);
const ProgramaDeAsesoriasScreen = lazy(() =>
  import("./ProgramaDeAsesorias/ProgramaDeAsesorias.Screen")
);
const ResidenciaScreen = lazy(() => import("./Residencia/Residencia.Screen"));
const SeguroScreen = lazy(() => import("./Seguro/Seguro.Screen"));
const ServicioSocialScreen = lazy(() =>
  import("./ServicioSocial/ServicioSocial.Screen")
);
const TitulacionIntegralScreen = lazy(() =>
  import("./TitulacionIntegral/TitulacionIntegral.Screen")
);
const TramitesEscolaresScreen = lazy(() =>
  import("./TramitesEscolares/TramitesEscolares.Screen")
);
const TrasladosScreen = lazy(() => import("./Traslados/Traslados.Screen"));

const base = "/estudiantes";

/**
 * @type {import('@Entity/Routes/Route.Entity').RouteEntity[]}
 */
const routes = [
  {
    path: `${base}/acreditacion-ingles`,
    Component: AcreditacionInglesScreen,
  },
  {
    path: `${base}/actividades-complementarias`,
    Component: ActividadesComplementariasScreen,
  },
  {
    path: `${base}/aportaciones`,
    Component: AportacionesScreen,
  },
  {
    path: `${base}/becas`,
    Component: BecasEstudiantesScreen,
  },
  {
    path: `${base}/cambio-de-carrera`,
    Component: CambioDeCarreraScreen,
  },
  {
    path: `${base}/movilidad-estudiantil`,
    Component: MovilidadEstudiantilScreen,
  },
  {
    path: `${base}/programa-de-asesorias`,
    Component: ProgramaDeAsesoriasScreen,
  },
  {
    path: `${base}/residencia`,
    Component: ResidenciaScreen,
  },
  {
    path: `${base}/seguro-en-caso-de-accidentes`,
    Component: SeguroScreen,
  },
  {
    path: `${base}/servicio-social`,
    Component: ServicioSocialScreen,
  },
  {
    path: `${base}/titulacion-integral`,
    Component: TitulacionIntegralScreen,
  },
  {
    path: `${base}/tramites-escolares`,
    Component: TramitesEscolaresScreen,
  },
  {
    path: `${base}/traslados`,
    Component: TrasladosScreen,
  },
];

export default routes;
