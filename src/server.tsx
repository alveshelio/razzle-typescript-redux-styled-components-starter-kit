import express from "express";
import React from "react";
import { Provider } from "react-redux";
import qs from "qs";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import serialize from "serialize-javascript";

import { fetchCounter } from "./common/api/counter";
import configureStore from "./common/store/configureStore";

import App from "./App";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", async (req: express.Request, res: express.Response) => {
    const params = qs.parse(req.query);
    const response = await fetchCounter();

    const counter = parseInt(params.counter, 10) || response || 0;
    const preloadedState = { counter };
    const store = configureStore(preloadedState);

    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>,
      ),
    );

    const finalState = store.getState();
    const styleTags = sheet.getStyleTags();
    res.send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle TypeScript</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ""}
          ${
            process.env.NODE_ENV === "production"
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
    </html>`,
    );
  });

export default server;
