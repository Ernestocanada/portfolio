import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ReviewItem from "./ReviewItem";

import Title from "./Title";

export default function ReviewSection() {
  return (
    <ReviewSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text="Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development" />

          <ReviewItem text="Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development" />
        </div>
      </InnerLayout>
    </ReviewSectionStyled>
  );
}

const ReviewSectionStyled = styled.section`
  .reviews {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;
