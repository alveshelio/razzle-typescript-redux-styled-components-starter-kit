import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Container = styled.div`
  display: grid;
  max-width: 1200px;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-400);
  padding: 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

const HeaderContent = () => (
  <Container>
    <Nav>
      <NavLink to="/activities">
        <Button>Button 10</Button>
      </NavLink>
      <NavLink to="/">
        <Button>Button 10</Button>
      </NavLink>
      <Button>Button 10</Button>
      <Button>Button 10</Button>
    </Nav>
  </Container>
);

export default HeaderContent;
