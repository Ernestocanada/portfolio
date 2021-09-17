import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export default function PrimaryButton({ title }) {
  return (
    <PrimaryButtonStyled>
      <Tilt
        className="button parallax-effect-img"
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={800}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
      >
        {title}
      </Tilt>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  z-index: 50;
  .button {
    position: relative;
    color: rgba(255, 255, 255, 1);

    background-color: rgba(219, 87, 5, 1);
    font-weight: 700;
    font-size: inherit;
    display: inline-block;
    padding: 0.8rem 2.5rem;
    border-radius: 20px;
    box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, 0.7);

    text-align: center;
    transition: all 0.2s ease;
    z-index: 10;
    cursor: pointer;
    text-transform: uppercase;

    &:active {
      box-shadow: 0px 3px 0px rgba(219, 31, 5, 1),
        0px 3px 6px rgba(0, 0, 0, 0.9);
      position: relative;
      top: 6px;
    }

    /* position: relative;
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    z-index: 10;
    display: inline-block;
    border-radius: 20px;
    font-size: inherit;
    text-transform: uppercase;
    box-shadow: -3px 3px orange, -2px 2px orange, -1px 1px orange;
    border: 1px solid orange;
    transition: all 0.6s ease-in-out; */

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.2rem;
      transition: all 0.4s ease;
      left: 25%;
      right: 0;
      bottom: 0;
      opacity: 0.7;
      border-radius: 20px;
    }
    &:hover::after {
      width: 50%;
      background-color: var(--white-color);
    }
  }
`;
