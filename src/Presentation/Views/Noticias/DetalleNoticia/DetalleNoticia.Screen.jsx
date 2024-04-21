import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { News } from "@Data/Noticias";
import Title from "@Components/General/Title";
import { generateTitle } from "@Utility/Layout.Helper";

export default function DetalleNoticiaScreen() {
  const { id } = useParams();
  let noticia = id ? News.find((noticia) => noticia.id === id) : null;
  let title = noticia ? noticia.title : "Noticia no encontrada";

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Title text={generateTitle(title)} isPage />
      {noticia ? (
        <div dangerouslySetInnerHTML={{ __html: noticia.content }} />
      ) : (
        <div className="min-height" />
      )}
    </Container>
  );
}
