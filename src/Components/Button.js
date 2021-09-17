import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

export const Button = ({ category, buttons }) => {
  return (
    <ButtonStyled>
      {buttons.map((but, i) => {
        return (
          <ButStyled key={i} onClick={() => category(but)}>
            <PrimaryButton title={but} />
          </ButStyled>
        );
      })}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const ButStyled = styled.button`
  all: unset;
  margin-bottom: 2rem;
`;
