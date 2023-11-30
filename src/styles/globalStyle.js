'use client'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 100%;
    font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
  }
  html,
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  body {
    background-color: #e5e7eb;
  }
`
