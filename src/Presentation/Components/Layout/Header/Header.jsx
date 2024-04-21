//@ts-check
import React from "react";
import HeaderItem from "./HeaderItem";
import Row from "react-bootstrap/Row";
import headerData from "@Data/Layout/header.json";

/**
 * @type {import('@Entity/Layout/Header.Entity').Header[]}
 */
const headers = headerData.headers;

const Header = () => {
  return (
    <Row className="mt-2 container-fluid">
      {headers.map((header) => (
        <HeaderItem key={header.name} src={header.src} alt={header.name} />
      ))}
    </Row>
  );
};

export default Header;
