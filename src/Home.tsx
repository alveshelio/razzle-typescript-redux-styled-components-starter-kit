import React from "react";
import styled from "styled-components";

import Button from "./components/Button";
import { CommonLayout } from "./pages/layout/common-layout";
import CounterContainer from "./components/Counter.container";

const Container = styled.div`
  max-width: 1200px;
`;

const Home = () => (
  <CommonLayout title="Home">
    <Container>
      <p>
        To get started, edit <code>src/App.tsx</code> or <code>src/Home.tsx</code> and save to reload.
      </p>
      <ul>
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
      <CounterContainer />
      <Button>Button</Button>
    </Container>
  </CommonLayout>
);

export default Home;
