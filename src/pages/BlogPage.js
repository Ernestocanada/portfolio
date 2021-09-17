import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blog from "../data/blog";
import Tilt from "react-parallax-tilt";

import { MainLaout, InnerLayout } from "../styles/Layout";

export default function BlogPage() {
  return (
    <MainLaout>
      <BlogPageStyled>
        <Title title={"Blog"} span={"Blog"} />
        <InnerLayout>
          <div className="flex blog">
            {blog.map((info) => {
              return (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <div key={info.id} className="container  ">
                    <h4>{info.title}</h4>

                    {/* <p>{`${info.date} / ${info.month}/ ${info.year}`}</p> */}
                    <Tilt>
                      <img src={info.Image} alt="news" />
                    </Tilt>
                  </div>
                </a>
              );
            })}
          </div>
        </InnerLayout>
      </BlogPageStyled>
    </MainLaout>
  );
}

const BlogPageStyled = styled.div`
  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-content: center;
    width: 50px;

    a {
      .container {
        cursor: pointer;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        padding: 5px;
        background-color: var(--background-dark-grey);
        transition: all 0.1s ease-in-out;
        &:hover {
          background-color: var(--primary-color);
        }
        img {
          width: 300px;
          height: 200px;
        }

        h4 {
          padding: 0.5rem 0;
          align-items: center;
          font-size: 1rem;
          color: var(--white-color);
        }
      }
    }
  }
`;
