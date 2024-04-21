import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//Capa de datos
import { News } from "@Data/Noticias";
//Capa de presentación
import Title from "@Components/General/Title";
import NoticiaCard from "@Components/Card/NoticiaCard";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function ListadoNoticiasScreen() {
  return (
    <Container>
      <Helmet>
        <title>{generateTitle("Listado de noticias")}</title>
      </Helmet>
      <Title text="Listado de noticias" isPage />
      <Row className="p-0 row-gap-4 mb-4">
        {News.map((noticia, index) => (
          <NoticiaCard
            key={index}
            image={noticia.banner}
            title={noticia.title}
            description={noticia.description}
            href={`/noticias/${noticia.id}`}
          />
        ))}
      </Row>
    </Container>
  );
}
