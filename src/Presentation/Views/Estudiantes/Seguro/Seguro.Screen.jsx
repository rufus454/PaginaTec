import React from "react";
import { Helmet } from "react-helmet";

import { generateTitle } from "@Utility/Layout.Helper";

export default function SeguroScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Seguro en caso de Accidentes")}</title>
      </Helmet>
      Seguro
    </div>
  );
}
