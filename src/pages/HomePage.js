import React from "react";
import styled from "styled-components";

import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { MainLaout } from "../styles/Layout";

export default function HomePage() {
  return (
    <MainLaout>
      <HomePageStyled>
        <div className="typography">
          <h1>
            Hi, I am <span>Ernesto</span>
          </h1>
          <p>
            I'm a Full Stack Developer based in Canada (Kitchener) and
            Spain(Alicante). My expertise ranges from creating engaging and
            responsive User Interfaces, Websites, and backend business logic.
            Working with me is super easy and efficient. I will take your
            requirements and provide the best solutions possible with
            easy-to-understand and maintain code. It's important to me to
            deliver quality no matter what.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/ernestodelapena/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/Ernestocanada"
              className="icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </HomePageStyled>
    </MainLaout>
  );
}

const HomePageStyled = styled.header`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  .typography {
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    p {
      text-align: justify;
      padding: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      z-index: 1;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 1rem;
        }
      }
      .github {
        &:hover {
          border: 2px solid rebeccapurple;
          color: var(--primary-color);
        }
      }
    }
  }
`;
