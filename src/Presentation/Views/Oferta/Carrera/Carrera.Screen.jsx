import React from "react";
import { Helmet } from "react-helmet";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import { careers } from "@Data/Oferta";
import { generateTitle } from "@Utility/Layout.Helper";

import DocLink from "@Components/Oferta/DocLink";
import CareerData from "@Components/Oferta/CareerData";
import ReticleElement from "@Components/Oferta/ReticleElement";
import SubjectContainer from "@Components/Oferta/SubjectContainer";
import HorizontalSpacer from "@Components/General/HorizontalSpacer";

export default function CarreraScreen() {
  const { id } = useParams();
  const career = careers.filter((el) => el.id === id)[0];
  const title = career ? career.title : "Carrera no encontrada";
  return (
    <div>
      <Helmet>
        <title>{generateTitle(title)}</title>
      </Helmet>

      {career ? (
        <>
          <Image src={career.banner} fluid />

          <CareerData
            image={career.specializationImage}
            title={"Especialización"}
            text={career.specialization}
          />

          <CareerData
            image={career.labourMarketImage}
            title={"Campo"}
            text={career.labourMarket}
          />

          <HorizontalSpacer className="d-flex justify-content-center w-100 m-0">
            <h3 className="text-center">Plan Educativo</h3>
            <Tabs
              defaultActiveKey="null"
              id={`fill-tab-${career.id}`}
              className="mb-3 w-100"
              fill
            >
              {career.careerPlan.map((semester, index) => {
                return (
                  <Tab
                    key={`Tab-${career.title}-${index}`}
                    eventKey={index}
                    title={`°${index + 1}`}
                    className="w-100 text-text-black decoration-none"
                  >
                    <SubjectContainer>
                      {semester.map((subject) => {
                        return (
                          <DocLink
                            key={subject.title}
                            href={subject.doc}
                            target="_blank"
                            className="decoration-none w-100 text-center"
                            title={subject.title}
                          >
                            {subject.title}
                          </DocLink>
                        );
                      })}
                    </SubjectContainer>
                  </Tab>
                );
              })}
            </Tabs>

            <ReticleElement
              image={career.reticle}
              alt={`${career.title} reticula`}
              pdf={career.reticlePdf}
            />
          </HorizontalSpacer>

          <HorizontalSpacer>
            <Accordion className="mt-5 px-5(max-width: 768px) px-0">
              {career.accordions.map((item, index) => {
                return (
                  <Accordion.Item
                    key={`${item.title}-${index}-${career.id}`}
                    eventKey={index}
                    className="mb-4"
                  >
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </HorizontalSpacer>
        </>
      ) : (
        <h1 className="min-height my-auto text-center">Carrera no existente</h1>
      )}
    </div>
  );
}
