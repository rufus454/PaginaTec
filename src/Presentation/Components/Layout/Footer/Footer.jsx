import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

import footerData from "@Data/Layout/footer.json";

import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FooterMedia from "./FooterMedia";
import FooterColumn from "./FooterColumn";
import FooterWrapper from "./FooterWrapper";
import FooterReadMore from "./FooterReadMore";
import FooterLogoWrapper from "./FooterLogoWrapper";
import FooterLogoContainer from "./FooterLogoContainer";

/**
 * @type {import('@Entity/Layout/Footer.Entity').FooterData}
 */
const data = footerData;

const firstColumn = data.first;
const secondColumn = data.second;

const Footer = () => {
  return (
    <FooterWrapper>
      <Row className="d-flex">
        <FooterLogoWrapper
          lg={3}
          md={6}
          sm={12}
          xs={12}
          className="d-flex justify-content-center"
        >
          <FooterLogoContainer>
            <Image
              src="/image/layout/footer/logo-footer-gobierno-blanco.svg"
              fluid
            />
          </FooterLogoContainer>
        </FooterLogoWrapper>
        <FooterColumn lg={3} md={12} sm={12} xs={12} className="top-0">
          <FooterTitle title="Enlaces" />
          <div className="d-flex flex-column row-gap-2">
            {firstColumn.map((item, index) => (
              <FooterLink
                key={`${index}-${item.text}`}
                href={item.href}
                text={item.text}
              />
            ))}
          </div>
        </FooterColumn>
        <FooterColumn lg={3} md={12} sm={12} xs={12} className="top-0">
          <FooterTitle title="¿Qué es gob.mx?" />
          <span className="text-white">
            Es el portal único de trámites, información y participación
            ciudadana.
          </span>{" "}
          <FooterReadMore
            href="https://www.gob.mx/que-es-gobmx"
            title="¿Qué es gob.mx?"
          >
            Leer más
          </FooterReadMore>
          <div className="d-flex flex-column row-gap-2 mt-3">
            {secondColumn.map((item, index) => (
              <FooterLink
                key={`${index}-${item.text}`}
                href={item.href}
                text={item.text}
              />
            ))}
          </div>
        </FooterColumn>
        <FooterColumn lg={3} md={12} sm={12} xs={12}>
          <FooterLink
            href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54"
            text="Denuncia contra servidores públicos"
          />
          <div className="mt-4" />
          <FooterTitle title="Síguenos en:" />
          <div className="d-flex justify-content-between w-25 my-3">
            <FooterMedia
              href="https://www.facebook.com/GobiernoMX"
              title="Facebook"
              Icon={FaFacebookF}
            />
            <FooterMedia
              href="https://twitter.com/GobiernoMX"
              title="Twitter"
              Icon={FaTwitter}
            />
            <FooterMedia
              href="https://www.youtube.com/@gobiernodemexico"
              title="YouTube"
              Icon={FaYoutube}
            />
          </div>
        </FooterColumn>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
