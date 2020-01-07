import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    min-height: 100%;
    padding: 0;
    position: absolute;
    -webkit-touch-callout: none;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;

    & * {
      -webkit-tap-highlight-color: color(var(--color-light) a(0));
    }

    overscroll-behavior: contain;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body,
  html,
  #root {
    height: 100%;
    width: 100%;
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-light);
  }

  a,
  abbr,
  address,
  article,
  aside,
  audio,
  b,
  blockquote,
  body,
  caption,
  cite,
  code,
  dd,
  del,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  fieldset,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  p,
  pre,
  q,
  samp,
  section,
  small,
  span,
  strong,
  sub,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  ul,
  var,
  video {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  p,
  button,
  abbr,
  a,
  span,
  small,
  li {
    text-size-adjust: 100%;
    cursor: default;
  }

  a {
    -webkit-tap-highlight-color: color(var(--color-dark) a(0%));
    text-decoration: none;
    color: currentColor;
  }

  ul,
  ol {
    margin-left: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  input:not([type="checkbox"]):not([type="radio"]),
  button {
    appearance: none;
    outline: none;
    -webkit-tap-highlight-color: color(var(--color-light) a(0%));
    -webkit-touch-callout: none;
  }

  .root {
    background-color: var(--color-background);
  }
`;
