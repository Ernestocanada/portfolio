import React from "react";
import styled from "styled-components";
import resume from "../image/Ernesto/ernesto2.jpg";
import PrimaryButton from "./PrimaryButton";
import resume1 from "../image/Ernesto/ErnestoResume .pdf";
export default function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am<span> Ernesto</span>
        </h4>

        <p className="paragraphy">
          Full-stack web developer that loves solving problems using technology.
          I am an entrepreneurial, data-informed and user-focused Product /
          Project Leader & lifelong learner / generalist. You’ll often find me
          working on complex problems that require a multi-disciplinary
          approach.
        </p>
        <p className="paragraphy">
          I am eager to provide reliable, and consistent results. Please contact
          me so we can discuss how we can work together to fully meet your
          business needs.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Services</p>

            <p>Location</p>
            <p>languages</p>
          </div>
          <div className="info">
            <p>: Full Stack Developer</p>

            <p>: Spain - Canada</p>
            <p>: English and Spanish</p>
          </div>
        </div>
        <a href={resume1} download="Resume Ernesto De La Pena">
          <PrimaryButton title={"Download Resume"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }

  .left-content {
    width: 100%;
    height: auto;

    img {
      width: 95%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right-content {
    width: 100%;

    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraphy {
      padding: 1rem 0;
      text-align: justify;
    }

    .about-info {
      display: flex;
      padding-bottom: 1.4rem;

      .info-title {
        padding-right: 3rem;

        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
