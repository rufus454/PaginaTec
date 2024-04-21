import React, { useEffect, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Loader from "@Components/General/Loader";
import Header from "@Components/Layout/Header/Header";
import Footer from "@Components/Layout/Footer/Footer";
import Navigation from "@Components/Layout/Navigation/Navigation";

import inicioRoutes from "@Views/Inicio";
import institucionRoutes from "@Views/Institucion";
import ofertaRoutes from "@Views/Oferta";
import personalRoutes from "@Views/Personal";
import estudiantesRoutes from "@Views/Estudiantes";
import aspirantesRoutes from "@Views/Aspirantes";
import vinculacionRoutes from "@Views/Vinculacion";
import egresadosRoutes from "@Views/Egresados";
import noticiasRoutes from '@Views/Noticias'

import NotFoundScreen from "@Views/404/404.Screen";

const routes = [
  ...inicioRoutes,
  ...institucionRoutes,
  ...ofertaRoutes,
  ...personalRoutes,
  ...estudiantesRoutes,
  ...aspirantesRoutes,
  ...vinculacionRoutes,
  ...egresadosRoutes,
  ...noticiasRoutes,
];

/*************************************************
 *******          ¡Importante!             *******

  Si se piensa realizar alguna modificación de la 
  aplicación, por favor leer el archivo README.md 
  en la raíz del proyecto. Esto para llevar una 
  correcta estructura y organización del proyecto 
  y evitar código basura. 
  
  *******          ¡Importante!             *******
 *************************************************/

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Navigation />
      <Header />
      <div className="mt-4">
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          {routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              Component={() => (
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              )}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </HelmetProvider>
  );
}
