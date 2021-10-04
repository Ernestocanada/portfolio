import React from "react";

import styled from "styled-components";

export default function ContactItem({
  icon,
  title,
  emailLink,
  contact1,
  contact2,
}) {
  return (
    <ContactItemStyled>
      <div className="left">
        <p>{icon}</p>
      </div>
      <div className="right">
        <h6>{title}</h6>
        <a
          href="mailto:ernesto.delapenamolina@gmail.com?subject=Mail from Ernesto Website"
          target="_blank"
          rel="noreferrer"
        >
          {emailLink}
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Alicante"
          target="_blank"
          rel="noreferrer"
        >
          {contact1}
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Kitchener,_Ontario"
          target="_blank"
          rel="noreferrer"
        >
          {contact2}
        </a>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  display: flex;
  width: 80vh;
  margin-top: 25px;
  background-color: var(--background-dark-grey);

  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  a {
    color: #0645ad;
    font-weight: 800;
  }
  .left {
    padding: 2rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;

    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;

    svg {
      font-size: 2.3rem;
    }
  }

  .right {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
  }
`;
