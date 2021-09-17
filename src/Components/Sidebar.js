import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

/////////////////////////////////
function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);

  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    margin-top: 200px;
    margin-bottom: 100px;
    padding: 0;
    width: 100px;
    height: 50%;
  }
`;

export default Sidebar;
