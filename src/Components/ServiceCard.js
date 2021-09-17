import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export default function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <Tilt
        className="parallax-effect-img  "
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={800}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
      >
        <img src={image} alt="svg" />
      </Tilt>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
  width: 300px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 35px;

  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  h4 {
    color: var(--white-color);
    font-size: 1.6rem;
    padding: 1rem 0;
    position: relative;

    &::after {
      content: "";

      width: 4rem;
      background-color: var(--border-color);
      height: 3px;
      position: absolute;
      left: 35%;
      bottom: 0;
      border-radius: 10px;
    }
  }

  img {
    width: 80px;
  }

  p {
    padding: 0.8rem 0;
  }
`;
