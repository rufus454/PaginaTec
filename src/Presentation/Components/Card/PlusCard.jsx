import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import Col from "react-bootstrap/Col";

const Card = styled(Col)`
  width: 405px;
  height: 450px;
  position: relative;
  padding-bottom: 50px;
  background-color: #fff;
  -webkit-box-shadow: 0 21px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 21px 35px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-right: 35px;
  border-radius: 20px;
  border: 2px solid #282828;

  & p {
    font-size: 16px;
    line-height: 30px;
  }

  & h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    & {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;

const Text = styled.div`
  padding: 15px;
  margin-top: 65%;

  .text {
    display: flex;
    flex-direction: column;
  }
`;

const TextFull = styled.div`
  padding: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const More = styled.div`
  width: 100px;
  height: 100px;
  top: auto;
  right: 0;
  bottom: -60px;
  left: 0;
  background-color: #3a3d42;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  z-index: 9;
  font-size: 20px;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;

  &:hover {
    background-color: #f7f7f7;
    color: #3a3d42;
  }
  &.active {
    background-color: #f7f7f7;
    color: #3a3d42;
  }
`;

const MoreText = styled.div`
  top: "";
  right: "";
  bottom: -120%;
  left: 0;
  position: absolute;
  height: 100%;
  background-color: #3a3d42;
  padding: 30px;
  overflow-y: auto;
  -webkit-transition: all ease 0.7s;
  transition: all ease 0.7s;

  & h2 {
    color: #fff;
    margin: 50px;
  }

  & p {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 30px;
  }

  &.active {
    bottom: 0;
    width: 100%;
  }
`;

/**
 * Componente de tarjeta con contenido desplegable.
 * @param {Object} params Parámetros del componente.
 * @param {string} [params.image] Imagen del componente es opcional.
 * @param {string} params.title Título del componente.
 * @param {string} [params.description] Descripción del componente.
 * @param {string} params.content Contenido del componente.
 */
const PlusCard = ({ image = "", title, description = "", content }) => {
  const [active, setActive] = useState(false);
  const [className, setClassName] = useState("");

  const handleClick = () => {
    setActive(!active);
    setClassName(active ? "" : "active");
  };

  return (
    <Card lg={3} md={6} sm={12} xs={12}>
      {image ? (
        <>
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "227px",
                width: "100%",
              }}
            />
          </div>
          <Text>
            <div className="text">
              <h2>{title}</h2>
              {description && <p className="w-100">{description}</p>}
            </div>
            <More onClick={handleClick} className={className}>
              <FaPlus color={active ? "#3a3d42" : "#fff"} />
            </More>
          </Text>
        </>
      ) : (
        <TextFull>
          <div className="text">
            <h2>{title}</h2>
            {description && <p className="w-100">{description}</p>}
          </div>
          <More onClick={handleClick} className={className}>
            <FaPlus color={active ? "#3a3d42" : "#fff"} />
          </More>
        </TextFull>
      )}

      <MoreText className={className}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MoreText>
    </Card>
  );
};

export default PlusCard;
