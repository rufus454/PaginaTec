import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function NotFoundScreen() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h3>Esta página no existe o se encuentra en mantenimiento.</h3>
      <a
        href="https://storyset.com/web"
        className="d-flex justify-content-center flex-column"
      >
        <Image src="/image/404.svg" fluid alt="404" />
        Web illustrations by Storyset
      </a>
    </Container>
  );
}
