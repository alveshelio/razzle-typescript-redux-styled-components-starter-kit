import React from "react";

import Button from "./components/Button";

const Home = () => (
  <div>
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
    <Button>Button</Button>
  </div>
);

export default Home;
