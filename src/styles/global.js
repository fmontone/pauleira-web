import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap');

  *, *::after, *::before {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
 }

 :focus {
    outline: none !important;
}

 html, body, #root {
   height: 100%;
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

`;
