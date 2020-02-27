import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap');

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 *:focus {
   outline: 0;
 }

 html, body, #root {
   height: 100%;
 }

 body {
   -webkit-font-smoothing: antialiased;
 }

 body, input, button, select, textarea {
   font-family: 'Rubik', Arial, Helvetica, sans-serif;
   font-weight: 300;
   color: ${colors.black};
 }

`;
