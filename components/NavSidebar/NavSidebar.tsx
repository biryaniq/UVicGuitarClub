import React from "react";
import styled from "styled-components";

type NavigationLink = {
  name: string;
  link: string;
};

const navLinks: NavigationLink[] = [
  { name: "About", link: "/#about" },
  { name: "What We Do", link: "/#what-we-do" },
  { name: "Projects", link: "/#projects" },
  { name: "Get Involved", link: "/#get-involved" },
];

const InactiveLink = styled.div`
  background-color: #fff;
  border-left: 3px solid #fff;
  padding: 0.25em 0.5em;
  transition: 0.3s ease;
  :hover {
    background-color: #eef2ff;
    color: #4f46e5;
    border-color: #4f46e5;
  }
`;

// This doesnt work!!!!
const ActiveLink = styled.div`
  background-color: #eef2ff;
  border-left: 3px solid #4f46e5;
  color: #4f46e5;
  padding: 0.25em 0.5em;
`;

const NavSidebar = () => {
  return (
    <ul>
      {navLinks.map((navLink: NavigationLink) => (
        <li key={navLink.name}>
          <a href={navLink.link}>
            <InactiveLink>{navLink.name}</InactiveLink>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavSidebar;
