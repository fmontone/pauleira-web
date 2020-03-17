import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`

  *, *::after, *::before {
   margin: 0;
   padding: 0;
   outline: none;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
 }

 :focus {
    outline: none !important;
}

 html, body, #root {
   min-height: 100%;
 }

 body {
   -webkit-font-smoothing: antialiased;
   text-rendering: optimizeLegibility;
 }

 body, input, button, select, textarea {
   font-family: 'Rubik', Arial, Helvetica, sans-serif;
   font-weight: 300;
   color: ${colors.black};
 }

 a {
   text-decoration: none;
   color: ${colors.statusInfo};
 }

 button {
   border: none;
 }

`;
