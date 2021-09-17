import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../image/Ernesto/ernesto1.jpg";
import Tilt from "react-parallax-tilt";
function Navigation() {
  const year = new Date().getFullYear();
  return (
    <NavigationStyle>
      <div className="avatar">
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.3}
          gyroscope={true}
        >
          <img src={avatar} alt="" />
        </Tilt>
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>
            Portfolio
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/blog" activeClassName="active-class" exact>
            Blog
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p> 🌎 {year} Ernesto De La Pena</p>
      </footer>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.nav`
  z-index: 15;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  @media screen and (max-width: 800px) {
  }

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
      transition: all 0.3s ease-in;
      &:hover {
        border-color: var(--primary-color);
      }
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        @media screen and (max-width: 800px) {
          font-size: 0.6rem;
        }

        :hover {
          cursor: pointer;
        }
        ::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(0.23, 0.53, 0.23, 0.53);
          opacity: 0.3;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
        z-index: -2;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
