import React from "react";
import styled from "styled-components";
import ProgressBar from "../pages/ProgressBar";
import { MainLaout, InnerLayout } from "../styles/Layout";
import Title from "./Title";

export default function Skills() {
  return (
    <SkillsStyled>
      <MainLaout>
        <Title title={"My Skills"} span={"My Skills"} />
        <InnerLayout>
          <div className="aboutMy">
            <p>
              I’m always looking to code to the highest standards. I’m
              continually learning and using new technologies to improve my
              work’s quality and skills. I’m trustworthy, organized, methodical,
              and with an excellent eye for the details. I understand the value
              of excellent communication regarding all progress for the whole
              work as a fundamental key to tighten the long-lasting
              relationships with my entire teams, my partners, and my clients.
            </p>
            <p>
              Here a list of some of the tools that I'm usually using , my
              knowledge and skills:
            </p>
          </div>
          <div className="skills">
            <ProgressBar
              className="skill"
              title={"HTML"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"CSS"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Responsive Design"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Javascript (including ES6/ES7/ES8/ES9/ES10/ES2020)"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"HTTP/JSON/AJAX"}
              width={"90%"}
              text={"90%"}
            />
            <ProgressBar
              className="skill"
              title={"WordPress"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"MongoDB / PostgresSQL"}
              width={"70%"}
              text={"70%"}
            />
            <ProgressBar
              className="skill"
              title={"Git + Github"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Command Line"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"RESTful API Design"}
              width={"80%"}
              text={"80%"}
            />
            <ProgressBar
              className="skill"
              title={"Production and Deployment"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Node.js"}
              width={"70%"}
              text={"70%"}
            />
            <ProgressBar
              className="skill"
              title={"Yarn / Npm"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Express.js"}
              width={"70%"}
              text={"70%"}
            />
            <ProgressBar
              className="skill"
              title={"React + Redux m+ React Hooks"}
              width={"90%"}
              text={"90%"}
            />
            <ProgressBar
              className="skill"
              title={"Google Tag Manager / Google Analytics"}
              width={"90%"}
              text={"90%"}
            />
            <ProgressBar
              className="skill"
              title={"Bootstrap Front-end framework"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Communication"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Teamwork"}
              width={"100%"}
              text={"100%"}
            />

            <ProgressBar
              className="skill"
              title={"Adaptability"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Problem-Solving"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Creativity"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Work Ethic"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Time Management"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Leadership"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Attention to Detail"}
              width={"100%"}
              text={"100%"}
            />
            <ProgressBar
              className="skill"
              title={"Interpersonal Skills"}
              width={"100%"}
              text={"100%"}
            />
          </div>
        </InnerLayout>
      </MainLaout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;

  .aboutMy {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    flex-wrap: wrap;
    align-content: space-around;

    p {
      text-align: justify;
      padding: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .skills {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
  }
`;
