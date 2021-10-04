import React from "react";

import styled from "styled-components";
import { MainLaout, InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";

import ContactForm from "../Components/ContactForm";

import ContactItem from "../Components/ContactItem";
import EmailIcon from "@material-ui/icons/Email";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export default function ContactPage() {
  const emailIcon = <EmailIcon />;
  const locationCity = <LocationCityIcon />;
  ////////////////////////////////////////////////

  return (
    <MainLaout>
      <ContactPageStyled>
        <Title title={"Contact"} span={"Contact"} />
        <InnerLayout className="contact-section">
          <div className="container">
            <div className="left-content">
              <ContactForm />
            </div>

            <div className="right-content">
              <a
                className="right"
                href="mailto:ernesto.delapenamolina@gmail.com?subject=Mail from Ernesto Website"
                target="_blank"
                rel="noreferrer"
              >
                <ContactItem
                  icon={emailIcon}
                  title={"Email"}
                  emailLink={"ernesto.delapenamolina@gmail.com"}
                />
              </a>
              <a
                className="right"
                href="https://en.wikipedia.org/wiki/Kitchener,_Ontario"
                target="_blank"
                rel="noreferrer"
              >
                <ContactItem
                  icon={locationCity}
                  title={"Location Canada"}
                  contact2={"Kitchener, Ontario, Canada"}
                />
              </a>

              <a
                className="right"
                href="https://en.wikipedia.org/wiki/Alicante"
                target="_blank"
                rel="noreferrer"
              >
                <ContactItem
                  icon={locationCity}
                  title={"Location Spain"}
                  contact1={"Alicante, Alicante, Spain"}
                />
              </a>
            </div>
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLaout>
  );
}

const ContactPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
      margin-left: -250px;
    }

    .left-content {
      /*  width: 400px;
    display: flex;
    flex-direction: column; */

      /*  @media screen and (max-width: 500px) {
      width: 44%;
    } */
    }

    .right-content {
      /*  display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-top: 25px;
    margin-right: 0;
    padding-right: 0; */

      .right {
        padding-bottom: 15px;
      }
    }
  }
`;
