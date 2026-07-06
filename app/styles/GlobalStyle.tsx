"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b0b10;
    --surface: #16161d;
    --border: #2a2a34;
    --text: #e6e6ea;
    --text-muted: #8a8a95;
    --accent-blue: #7dd3fc;
    --accent-purple: #a78bfa;
    --accent-green: #4ade80;
    --accent-red: #f87171;
    --accent-orange: #fb923c;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: "Segoe UI", Arial, Helvetica, sans-serif;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 32px 20px 64px;
  }

  h1 {
    font-size: 1.6rem;
    margin: 0 0 4px;
  }

  h2 {
    font-size: 1.05rem;
    margin: 0 0 12px;
    color: var(--accent-blue);
  }

  p {
    line-height: 1.55;
    color: var(--text);
  }

  ul {
    margin: 0;
    padding-left: 18px;
    line-height: 1.7;
  }

  code {
    background: var(--surface);
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 0.85em;
  }
`;

export default GlobalStyle;
